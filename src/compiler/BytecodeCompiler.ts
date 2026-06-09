import * as acorn from 'acorn';
import { OP_GROUPS, pickVariant, VARIANT_TO_GROUP } from './Opcode';
import type { CompileResult, PatchEntry } from './types';
import * as Stmts from './nodes/statements';
import { preObfuscateAST } from './PreObfuscator';

export class BytecodeCompiler {
  public code: number[] = [];
  public constants: any[] = [];
  public constMap = new Map<string, number>();
  public labels = new Map<string, number>();
  public patches: PatchEntry[] = [];
  public loopStack: { breakLabel: string | null; continueLabel: string | null }[] = [];
  private currentSuperClass: number | null = null;
  public funcCounter = 0;
  public externalAPIs = new Set<string>();
  public warnings: string[] = [];
  private fakeCallCounter = 0;
  private segmentCounter = 0;
  private opsSinceLastSegment = 0;
  private static readonly SEGMENT_INTERVAL = 40 + Math.floor(Math.random() * 30);
  public _currentBlockBody: any[] | null = null;
  public _inBlockScope = false;

  private getPropName(node: any): string {
    if (node.type === 'PrivateIdentifier') return '_' + node.name;
    return node.name || node.value;
  }

  addConstant(value: any): number {
    const t = typeof value;
    let key: string;
    if (value === null) key = 'null:';
    else if (value === undefined) key = 'undefined:';
    else if (t === 'object') key = 'obj:' + JSON.stringify(value);
    else if (t === 'symbol') key = 'sym:' + value.toString();
    else key = t + ':' + String(value);
    if (this.constMap.has(key)) return this.constMap.get(key)!;
    const idx = this.constants.length;
    this.constants.push(value);
    this.constMap.set(key, idx);
    return idx;
  }

  currentAddr(): number { return this.code.length; }

  private _opcodePos: number[] = [];

  emit(opcode: number, ...operands: number[]): void {
    this._opcodePos.push(this.code.length);
    this.code.push(opcode ^ (this.code.length & 0xFF));
    for (const op of operands) {
      this.code.push((op >>> 24) & 0xFF, (op >>> 16) & 0xFF, (op >>> 8) & 0xFF, op & 0xFF);
    }
    this.opsSinceLastSegment++;
    this.maybeInjectSegmentSwitch();
    this.maybeInjectFakeOps();
  }

  emitPoly(groupName: string, ...operands: number[]): void {
    var variant = pickVariant(groupName);
    this.emit(variant, ...operands);
  }

  setLabel(name: string): void { this.labels.set(name, this.currentAddr()); }

  emitJump(opcode: number, label: string): void {
    const addr = this.currentAddr();
    this.emit(opcode, 0);
    this.patches.push({ addr: addr + 1, label });
  }

  emitJumpPoly(groupName: string, label: string): void {
    var variant = pickVariant(groupName);
    this.emitJump(variant, label);
  }

  private maybeInjectSegmentSwitch(): void {}
  private maybeInjectFakeOps(): void {}

  patch(): void {
    for (const { addr, label } of this.patches) {
      const target = this.labels.get(label);
      if (target === undefined) throw new Error(`Undefined label: ${label}`);
      this.code[addr]     = (target >>> 24) & 0xFF;
      this.code[addr + 1] = (target >>> 16) & 0xFF;
      this.code[addr + 2] = (target >>> 8) & 0xFF;
      this.code[addr + 3] = target & 0xFF;
    }
  }

  Compile(source: string, preserve?: Set<string>, injectJunkExpressions?: boolean): CompileResult {
    var ast = acorn.parse(source, { ecmaVersion: 2022, sourceType: 'module', locations: true }) as any;
    preObfuscateAST(ast, {
      mangleIdentifiers: true,
      injectOpaquePredicates: false,
      injectJunkExpressions: injectJunkExpressions || false,
      preserve: preserve,
    });
    this.compileNode(ast);
    this.emitPoly('HALT');
    this.emitPoly('HALT');
    this.patch();

    for (var _ji = 0; _ji < 10; _ji++) { this.constants.push({ __junk: Math.random().toString(36) }); }
    return { bytecode: this.code, constants: this.constants, externalAPIs: this.externalAPIs, warnings: this.warnings };
  }

  public compileNode(node: any): void {
    if (!node) return;
    switch (node.type) {
      case 'Program':
        this._currentBlockBody = node.body;
        this._hoistVarDeclarations(node.body);
        for (const stmt of node.body) { if (stmt.type === 'FunctionDeclaration' || stmt.type === 'ClassDeclaration') this.compileNode(stmt); }
        for (const stmt of node.body) { if (stmt.type !== 'FunctionDeclaration' && stmt.type !== 'ClassDeclaration') this.compileNode(stmt); }
        this._currentBlockBody = null;
        break;
      case 'Literal':
        if (node.regex) this.emitPoly('PUSH_CONST', this.addConstant({ __regex: true, pattern: node.regex.pattern, flags: node.regex.flags }));
        else if (typeof node.value === 'bigint') this.emitPoly('PUSH_CONST', this.addConstant({ __bigint: true, value: String(node.value) }));
        else if (typeof node.value === 'string') {
          this.emitPoly('PUSH_CONST', this.addConstant(node.value));
        }
        else this.emitPoly('PUSH_CONST', this.addConstant(node.value));
        break;
      case 'Identifier':
        if (node.name.startsWith('GM_')) this.externalAPIs.add(node.name);
        this.emitPoly('PUSH_VAR', this.addConstant(node.name));
        break;
      case 'BlockStatement':
        var _prevBlock = this._currentBlockBody;
        this._currentBlockBody = node.body;
        var _hasLetConst = false;
        for (const stmt of node.body) {
          if (stmt.type === 'VariableDeclaration' && (stmt.kind === 'let' || stmt.kind === 'const')) {
            _hasLetConst = true;
            break;
          }
        }
        if (_hasLetConst) this._hoistVarDeclarations(node.body);
        if (_hasLetConst) this.emitPoly('ENTER_SCOPE');
        var _prevBlockScope = this._inBlockScope;
        if (_hasLetConst) this._inBlockScope = true;
        for (const stmt of node.body) { if (stmt.type === 'FunctionDeclaration') this.compileNode(stmt); }
        for (const stmt of node.body) { if (stmt.type !== 'FunctionDeclaration') this.compileNode(stmt); }
        if (_hasLetConst) this.emitPoly('EXIT_SCOPE');
        this._inBlockScope = _prevBlockScope;
        this._currentBlockBody = _prevBlock;
        break;
      case 'ExpressionStatement': this.compileNode(node.expression); if (this._currentBlockBody) { var _idx = this._currentBlockBody.indexOf(node); if (_idx === -1 || _idx !== this._currentBlockBody.length - 1) this.emitPoly('POP'); } else this.emitPoly('POP'); break;
      case 'EmptyStatement': break;
      case 'DebuggerStatement': this.emitPoly('DEBUG_BREAK'); break;
      case 'VariableDeclaration':
        if (node.kind === 'let' || node.kind === 'const') this.warnings.push(node.kind + ' is compiled as var (no block scoping)');
        for (const decl of node.declarations) {
          if (node.kind === 'var' && !decl.init) continue;
          if (node.kind === 'var' && decl.init && this._inBlockScope && decl.id.type === 'Identifier') {
            this.compileNode(decl.init);
            this.emitPoly('STORE_VAR', this.addConstant(decl.id.name));
            this.emitPoly('POP');
          } else {
            this.compileDeclaration(decl);
          }
        }
        break;
      case 'AssignmentExpression': this.compileAssignment(node); break;
      case 'UpdateExpression': this.compileUpdate(node); break;
      case 'BinaryExpression': this.compileNode(node.left); this.compileNode(node.right); this.emitBinaryOp(node.operator); break;
      case 'LogicalExpression':
        if (node.operator === '??') {
          const skipLabel = 'nullish_skip_' + this.currentAddr();
          this.compileNode(node.left);
          this.emitPoly('DUP');
          this.emitPoly('PUSH_CONST', this.addConstant(null));
          this.emitPoly('EQ');
          this.emitPoly('NOT');
          this.emitJumpPoly('JMP_IF_TRUE', skipLabel);
          this.emitPoly('POP');
          this.compileNode(node.right);
          this.setLabel(skipLabel);
        } else {
          const skipLabel = 'logical_skip_' + this.currentAddr();
          this.compileNode(node.left);
          this.emitPoly('DUP');
          this.emitJumpPoly(node.operator === '&&' ? 'JMP_IF_FALSE' : 'JMP_IF_TRUE', skipLabel);
          this.emitPoly('POP');
          this.compileNode(node.right);
          this.setLabel(skipLabel);
        }
        break;

      case 'UnaryExpression':
        if (node.operator === 'delete' && node.argument.type === 'MemberExpression') {
          this.compileNode(node.argument.object);
          if (node.argument.computed) this.compileNode(node.argument.property);
          else this.emitPoly('PUSH_CONST', this.addConstant(node.argument.property.name));
          this.emitPoly('DELETE');
        } else {
          this.compileNode(node.argument); this.emitUnaryOp(node.operator);
        }
        break;

      case 'FunctionDeclaration': this.compileFunction(node); this.emitPoly('STORE_VAR', this.addConstant(node.id.name)); break;
      case 'FunctionExpression': case 'ArrowFunctionExpression': this.compileFunction(node); break;
      case 'ReturnStatement': if (node.argument) this.compileNode(node.argument); else this.emitPoly('PUSH_CONST', this.addConstant(undefined)); this.emitPoly('RETURN'); break;
      case 'ThisExpression': this.emitPoly('THIS'); break;
      case 'CallExpression': this.compileCall(node); break;
      case 'NewExpression': this.compileNode(node.callee); for (const arg of node.arguments) this.compileNode(arg); this.emitPoly('NEW', node.arguments.length); break;
      case 'MemberExpression':
        this.compileNode(node.object);
        if (node.computed) { this.compileNode(node.property); this.emitPoly(node.optional ? 'OPTIONAL_CHAIN' : 'GET_INDEX'); }
        else this.emitPoly(node.optional ? 'OPTIONAL_CHAIN' : 'GET_PROP', this.addConstant(this.getPropName(node.property)));
        break;
      case 'ChainExpression': this.compileNode(node.expression); break;
      case 'ObjectExpression':
        this.emitPoly('NEW_OBJ');
        for (const prop of node.properties) {
          if (prop.type === 'SpreadElement') { this.compileNode(prop.argument); this.emitPoly('OBJ_SPREAD'); }
          else if (prop.type === 'Property') {
            if (prop.kind === 'get' || prop.kind === 'set') {
              var _gsKey = prop.key.name || prop.key.value;
              this.emitPoly('DUP');  
              this.emitPoly('PUSH_CONST', this.addConstant(_gsKey));  
              this.compileNode(prop.value);  
              this.emitPoly('CALL_METHOD', 2, this.addConstant(prop.kind === 'get' ? '__defineGetter__' : '__defineSetter__'));
              this.emitPoly('POP');
            } else {
              this.compileNode(prop.value);
              if (prop.computed) { this.compileNode(prop.key); this.emitPoly('SET_PROP_OBJ_COMPUTED'); }
              else { const key = prop.key.name || prop.key.value; this.emitPoly('SET_PROP_OBJ', this.addConstant(key)); }
            }
          }
        }
        break;
      case 'ArrayExpression':
        this.emitPoly('NEW_ARR', 0);
        var _holeCount = 0;
        for (const el of node.elements) {
          if (el) {
            if (el.type === 'SpreadElement') { this.compileNode(el.argument); this.emitPoly('ARRAY_SPREAD'); }
            else { this.compileNode(el); this.emitPoly('ARRAY_PUSH'); }
          } else {
            _holeCount++;
            this.emitPoly('PUSH_CONST', this.addConstant(undefined));
            this.emitPoly('ARRAY_PUSH');
          }
        }
        if (_holeCount > 0) {
          this.emitPoly('DUP');
          this.emitPoly('PUSH_CONST', this.addConstant(node.elements.length));
          this.emitPoly('SET_PROP', this.addConstant('length'));
          this.emitPoly('POP');
          var _hIdx = 0;
          for (const el of node.elements) {
            if (!el) {
              this.emitPoly('DUP');
              this.emitPoly('PUSH_CONST', this.addConstant(_hIdx));
              this.emitPoly('DELETE');
              this.emitPoly('POP');
            }
            _hIdx++;
          }
        }
        break;
      case 'SpreadElement': this.compileNode(node.argument); break;
      case 'IfStatement': Stmts.compileIf(this, node); break;
      case 'ConditionalExpression': { var _elseLabel = 'tern_else_' + this.currentAddr(); var _endLabel = 'tern_end_' + this.currentAddr(); this.compileNode(node.test); this.emitJumpPoly('JMP_IF_FALSE', _elseLabel); this.compileNode(node.consequent); this.emitJumpPoly('JMP', _endLabel); this.setLabel(_elseLabel); this.compileNode(node.alternate); this.setLabel(_endLabel); } break;
      case 'SwitchStatement': Stmts.compileSwitch(this, node); break;
      case 'ForStatement': Stmts.compileFor(this, node); break;
      case 'WhileStatement': Stmts.compileWhile(this, node); break;
      case 'DoWhileStatement': Stmts.compileDoWhile(this, node); break;
      case 'ForOfStatement': Stmts.compileForOf(this, node); break;
      case 'ForInStatement': Stmts.compileForIn(this, node); break;
      case 'BreakStatement': Stmts.compileBreak(this, node); break;
      case 'ContinueStatement': Stmts.compileContinue(this, node); break;
      case 'LabeledStatement': Stmts.compileLabeled(this, node); break;
      case 'TryStatement': Stmts.compileTry(this, node); break;
      case 'ThrowStatement': this.compileNode(node.argument); this.emitPoly('THROW'); break;
      case 'TemplateLiteral': this.compileTemplate(node); break;
      case 'TaggedTemplateExpression': throw new Error('Obfuscation refused: tagged template literals are not supported. Refactor to regular function calls before obfuscating.');
      case 'ClassDeclaration': this.compileClass(node, true); break;
      case 'ClassExpression': this.compileClass(node, false); break;
      case 'ImportDeclaration': this.warnings.push(`Import from '${node.source.value}' compiled as no-op`); break;
      case 'ExportNamedDeclaration': case 'ExportDefaultDeclaration': case 'ExportAllDeclaration':
        if (node.declaration) this.compileNode(node.declaration); break;
      case 'SequenceExpression':
        for (let i = 0; i < node.expressions.length; i++) { this.compileNode(node.expressions[i]); if (i < node.expressions.length - 1) this.emitPoly('POP'); }
        break;
      case 'AwaitExpression': this.compileNode(node.argument); this.emitPoly('AWAIT'); break;
      case 'YieldExpression': throw new Error('Obfuscation refused: yield/generators are not supported. Remove generator functions before obfuscating.');
      case 'ArrayPattern': case 'ObjectPattern': case 'RestElement': break;
      case 'MetaProperty': this.emitPoly('PUSH_CONST', this.addConstant(undefined)); break;
      case 'Super': this.emitPoly('THIS'); break;
      default: this.warnings.push(`Unhandled node type: ${node.type}`);
    }
  }

  private compileDeclaration(decl: any): void {
    if (decl.id.type === 'Identifier') {
      if (decl.init) { this.compileNode(decl.init); this.emitPoly('DECLARE_VAR', this.addConstant(decl.id.name)); }
      else { this.emitPoly('PUSH_CONST', this.addConstant(undefined)); this.emitPoly('DECLARE_VAR', this.addConstant(decl.id.name)); }
    } else if (decl.id.type === 'ArrayPattern') {
      if (!decl.init) {
        this.emitPoly('PUSH_CONST', this.addConstant([]));
      } else {
        this.compileNode(decl.init);
      }
      var _tmpArr = '__dest_arr_' + (this.funcCounter++);
      this.emitPoly('DECLARE_VAR', this.addConstant(_tmpArr));
      for (var _ei = 0; _ei < decl.id.elements.length; _ei++) {
        var _el = decl.id.elements[_ei];
        if (!_el) continue;
        if (_el.type === 'Identifier') {
          this.emitPoly('PUSH_VAR', this.addConstant(_tmpArr));
          this.emitPoly('PUSH_CONST', this.addConstant(_ei));
          this.emitPoly('GET_INDEX');
          this.emitPoly('DECLARE_VAR', this.addConstant(_el.name));
        } else if (_el.type === 'AssignmentPattern') {
          this.emitPoly('PUSH_VAR', this.addConstant(_tmpArr));
          this.emitPoly('PUSH_CONST', this.addConstant(_ei));
          this.emitPoly('GET_INDEX');
          this.emitPoly('PUSH_CONST', this.addConstant(undefined));
          this.emitPoly('STRICT_EQ');
          var _skipLabel = '__def_skip_' + this.currentAddr();
          this.emitJumpPoly('JMP_IF_FALSE', _skipLabel);
          this.emitPoly('POP');
          this.compileNode(_el.right);
          this.setLabel(_skipLabel);
          if (_el.left && _el.left.type === 'Identifier') {
            this.emitPoly('DECLARE_VAR', this.addConstant(_el.left.name));
          }
        } else if (_el.type === 'RestElement' && _el.argument.type === 'Identifier') {
          this.emitPoly('PUSH_VAR', this.addConstant(_tmpArr));
          this.emitPoly('PUSH_CONST', this.addConstant(_ei));
          this.emitPoly('CALL_METHOD', 1, this.addConstant('slice'));
          this.emitPoly('DECLARE_VAR', this.addConstant(_el.argument.name));
        }
      }
    } else if (decl.id.type === 'ObjectPattern') {
      if (!decl.init) {
        this.emitPoly('PUSH_CONST', this.addConstant({}));
      } else {
        this.compileNode(decl.init);
      }
      var _tmpObj = '__dest_obj_' + (this.funcCounter++);
      this.emitPoly('DECLARE_VAR', this.addConstant(_tmpObj));
      for (var _pi = 0; _pi < decl.id.properties.length; _pi++) {
        var _prop = decl.id.properties[_pi];
        if (_prop.type === 'RestElement') continue;
        var _keyName = _prop.key.name || _prop.key.value;
        if (_prop.value.type === 'Identifier') {
          this.emitPoly('PUSH_VAR', this.addConstant(_tmpObj));
          this.emitPoly('GET_PROP', this.addConstant(_keyName));
          this.emitPoly('DECLARE_VAR', this.addConstant(_prop.value.name));
        } else if (_prop.value.type === 'AssignmentPattern' && _prop.value.left.type === 'Identifier') {
          this.emitPoly('PUSH_VAR', this.addConstant(_tmpObj));
          this.emitPoly('GET_PROP', this.addConstant(_keyName));
          this.emitPoly('PUSH_CONST', this.addConstant(undefined));
          this.emitPoly('STRICT_EQ');
          var _oskipLabel = '__odef_skip_' + this.currentAddr();
          this.emitJumpPoly('JMP_IF_FALSE', _oskipLabel);
          this.emitPoly('POP');
          this.compileNode(_prop.value.right);
          this.setLabel(_oskipLabel);
          this.emitPoly('DECLARE_VAR', this.addConstant(_prop.value.left.name));
        }
      }
    }
  }

  private compileAssignment(node: any): void {
    const op = node.operator as string;
    if (op === '=') { this.compileSetTarget(node.left, () => this.compileNode(node.right)); return; }
    if (node.left.type === 'Identifier') { this.compileNode(node.left); this.compileNode(node.right); this.emitBinaryOp(op.slice(0, -1)); this.emitPoly('STORE_VAR', this.addConstant(node.left.name)); }
    else if (node.left.type === 'MemberExpression') {
      const isComputed = node.left.computed;
      const tmpObj = '__co_' + (this.funcCounter++), tmpIdx = isComputed ? '__ci_' + (this.funcCounter++) : null, tmpVal = '__cv_' + (this.funcCounter++);
      this.compileNode(node.left.object); this.emitPoly('DECLARE_VAR', this.addConstant(tmpObj));
      if (isComputed) { this.compileNode(node.left.property); this.emitPoly('DECLARE_VAR', this.addConstant(tmpIdx!)); }
      this.emitPoly('PUSH_VAR', this.addConstant(tmpObj));
      if (isComputed) { this.emitPoly('PUSH_VAR', this.addConstant(tmpIdx!)); this.emitPoly('GET_INDEX'); }
      else this.emitPoly('GET_PROP', this.addConstant(node.left.property.name));
      this.compileNode(node.right); this.emitBinaryOp(op.slice(0, -1)); this.emitPoly('DECLARE_VAR', this.addConstant(tmpVal));
      this.emitPoly('PUSH_VAR', this.addConstant(tmpObj));
      if (isComputed) { this.emitPoly('PUSH_VAR', this.addConstant(tmpIdx!)); this.emitPoly('PUSH_VAR', this.addConstant(tmpVal)); this.emitPoly('SET_INDEX'); }
      else { this.emitPoly('PUSH_VAR', this.addConstant(tmpVal)); this.emitPoly('SET_PROP', this.addConstant(node.left.property.name)); }
    }
  }

  private compileSetTarget(left: any, compileValue: () => void): void {
    if (left.type === 'Identifier') { compileValue(); this.emitPoly('STORE_VAR', this.addConstant(left.name)); }
    else if (left.type === 'MemberExpression') {
      this.compileNode(left.object);
      if (left.computed) { this.compileNode(left.property); compileValue(); this.emitPoly('SET_INDEX'); }
      else { compileValue(); this.emitPoly('SET_PROP', this.addConstant(this.getPropName(left.property))); }
    }
  }

  private compileUpdate(node: any): void {
    if (node.argument.type === 'Identifier') {
      const nameIdx = this.addConstant(node.argument.name);
      if (node.prefix) this.emitPoly(node.operator === '++' ? 'INC_PRE' : 'DEC_PRE', nameIdx);
      else this.emitPoly(node.operator === '++' ? 'INC_POST' : 'DEC_POST', nameIdx);
    } else if (node.argument.type === 'MemberExpression') {
      var isPost = !node.prefix;
      var delta = node.operator === '++' ? 1 : -1;
      var tmpObj = '__uo_' + (this.funcCounter++);
      var tmpVal = '__uv_' + (this.funcCounter++);
      this.compileNode(node.argument.object); this.emitPoly('DECLARE_VAR', this.addConstant(tmpObj));
      this.emitPoly('PUSH_VAR', this.addConstant(tmpObj));
      if (node.argument.computed) {
        this.compileNode(node.argument.property); this.emitPoly('GET_INDEX');
      } else {
        this.emitPoly('GET_PROP', this.addConstant(this.getPropName(node.argument.property)));
      }
      if (isPost) this.emitPoly('DUP');
      this.emitPoly('PUSH_CONST', this.addConstant(delta)); this.emitPoly('ADD');
      this.emitPoly('DECLARE_VAR', this.addConstant(tmpVal));
      this.emitPoly('PUSH_VAR', this.addConstant(tmpObj));
      this.emitPoly('PUSH_VAR', this.addConstant(tmpVal));
      if (node.argument.computed) {
        this.emitPoly('SET_INDEX');
      } else {
        this.emitPoly('SET_PROP', this.addConstant(this.getPropName(node.argument.property)));
      }
      this.emitPoly('POP');
    }
  }

  private compileCall(node: any): void {
    if (node.callee.type === 'MemberExpression') {
      if (node.callee.object.type === 'Super') {
        this.emitPoly('THIS');
        for (const arg of node.arguments) this.compileNode(arg);
        this.emitPoly('SUPER_METHOD', node.arguments.length, this.addConstant(node.callee.property.name));
      } else {
        this.compileNode(node.callee.object);
        if (node.callee.computed) { this.compileNode(node.callee.property); this.emitPoly('GET_INDEX'); for (const arg of node.arguments) this.compileNode(arg); this.emitPoly('CALL', node.arguments.length); }
        else { for (const arg of node.arguments) this.compileNode(arg); this.emitPoly('CALL_METHOD', node.arguments.length, this.addConstant(this.getPropName(node.callee.property))); }
      }
    } else if (node.callee.type === 'Super') { if (this.currentSuperClass !== null) this.emitPoly('PUSH_VAR', this.currentSuperClass); for (const arg of node.arguments) this.compileNode(arg); this.emitPoly('SUPER_CALL', node.arguments.length); }
    else { this.compileNode(node.callee); for (const arg of node.arguments) this.compileNode(arg); this.emitPoly('CALL', node.arguments.length); }
  }

  private emitBinaryOp(op: string): void {
    const map: Record<string, string> = { '+':'ADD','-':'SUB','*':'MUL','/':'DIV','%':'MOD','**':'EXP','==':'EQ','!=':'NEQ','===':'STRICT_EQ','!==':'STRICT_NEQ','<':'LT','<=':'LTE','>':'GT','>=':'GTE','&':'BIT_AND','|':'BIT_OR','^':'BIT_XOR','<<':'LSHIFT','>>':'RSHIFT','>>>':'URSHIFT','??':'NULLISH' };
    if (map[op]) this.emitPoly(map[op]);
    else if (op === 'instanceof') this.emitPoly('INSTANCEOF');
    else if (op === 'in') this.emitPoly('IN');
    else this.warnings.push(`Unknown binary operator: ${op}`);
  }

  private emitUnaryOp(op: string): void {
    if (op === 'void') { this.emitPoly('POP'); this.emitPoly('PUSH_CONST', this.addConstant(undefined)); }
    else { const map: Record<string, string> = { '!':'NOT','~':'BIT_NOT','-':'NEG','+':'POS','typeof':'TYPEOF','delete':'DELETE' }; if (map[op]) this.emitPoly(map[op]); }
  }

  private compileFunction(node: any): void {
    if (node.generator) throw new Error('Obfuscation refused: generator functions (function*) are not supported. Remove or convert before obfuscating.');
    const funcEnd = 'func_end_' + this.currentAddr();
    this.emitJumpPoly('JMP', funcEnd);
    const funcStart = this.currentAddr();
    if (node.body.type === 'BlockStatement') {
      this.emitPoly('ENTER_SCOPE');
      // Destructure ArrayPattern/ObjectPattern params
      if (node.params) {
        for (var _dpi = 0; _dpi < node.params.length; _dpi++) {
          var _dp = node.params[_dpi];
          if (_dp.type === 'ArrayPattern') {
            this.emitPoly('PUSH_VAR', this.addConstant('_p' + _dpi));
            for (var _ei = 0; _ei < _dp.elements.length; _ei++) {
              var _el = _dp.elements[_ei];
              if (_el && _el.type === 'Identifier') {
                this.emitPoly('DUP');
                this.emitPoly('PUSH_CONST', this.addConstant(_ei));
                this.emitPoly('GET_INDEX');
                this.emitPoly('DECLARE_VAR', this.addConstant(_el.name));
              }
            }
            this.emitPoly('POP');
          } else if (_dp.type === 'ObjectPattern') {
            this.emitPoly('PUSH_VAR', this.addConstant('_p' + _dpi));
            for (var _pi = 0; _pi < _dp.properties.length; _pi++) {
              var _prop = _dp.properties[_pi];
              if (_prop.value && _prop.value.type === 'Identifier') {
                var _kn = _prop.key.name || _prop.key.value;
                this.emitPoly('DUP');
                this.emitPoly('GET_PROP', this.addConstant(_kn));
                this.emitPoly('DECLARE_VAR', this.addConstant(_prop.value.name));
              }
            }
            this.emitPoly('POP');
          }
        }
      }
      if (node.params) {
        for (var _dpi = 0; _dpi < node.params.length; _dpi++) {
          var _dp = node.params[_dpi];
          if (_dp.type === 'AssignmentPattern' && _dp.left.type === 'Identifier') {
            this.emitPoly('PUSH_VAR', this.addConstant(_dp.left.name));
            this.emitPoly('PUSH_CONST', this.addConstant(undefined));
            this.emitPoly('STRICT_EQ');
            var _dpSkip = '__dp_skip_' + this.currentAddr();
            this.emitJumpPoly('JMP_IF_FALSE', _dpSkip);
            this.emitPoly('POP');
            this.compileNode(_dp.right);
            this.emitPoly('STORE_VAR', this.addConstant(_dp.left.name));
            this.emitPoly('POP');
            this.setLabel(_dpSkip);
          }
        }
      }
      this._hoistVarDeclarations(node.body.body);
      for (const stmt of node.body.body) { if (stmt.type === 'FunctionDeclaration') this.compileNode(stmt); }
      for (const stmt of node.body.body) { if (stmt.type !== 'FunctionDeclaration') this.compileNode(stmt); }
      this.emitPoly('EXIT_SCOPE');
      this.emitPoly('PUSH_CONST', this.addConstant(undefined)); this.emitPoly('RETURN');
    } else { this.compileNode(node.body); this.emitPoly('RETURN'); }
    this.setLabel(funcEnd);
    const params: string[] = [];
    if (node.params) {
      for (const param of node.params) {
        if (param.type === 'Identifier') params.push(param.name);
        else if (param.type === 'AssignmentPattern') { params.push(param.left.name); }
        else if (param.type === 'RestElement') params.push('...' + param.argument.name);
        else params.push('_p' + params.length);
      }
    }
    const isAsync = node.async === true;
    const isArrow = node.type === 'ArrowFunctionExpression';
    this.emitPoly('PUSH_FUNC', this.addConstant({ addr: funcStart, params, name: node.id ? node.id.name : null, async: isAsync, isArrow }));
  }

  private _hoistVarDeclarations(body: any[]): void {
    for (const stmt of body) {
      if (stmt.type === 'VariableDeclaration' && stmt.kind === 'var') {
        for (const decl of stmt.declarations) {
          if (decl.id && decl.id.type === 'Identifier') {
            this.emitPoly('PUSH_CONST', this.addConstant(undefined));
            this.emitPoly('DECLARE_VAR', this.addConstant(decl.id.name));
          }
        }
      } else if (stmt.type === 'BlockStatement') {
        this._hoistVarDeclarations(stmt.body);
      } else if (stmt.type === 'IfStatement') {
        if (stmt.consequent) this._hoistVarDeclarations(stmt.consequent.body || [stmt.consequent]);
        if (stmt.alternate) this._hoistVarDeclarations(stmt.alternate.body || [stmt.alternate]);
      } else if (stmt.type === 'ForStatement' && stmt.body) {
        this._hoistVarDeclarations(stmt.body.body || [stmt.body]);
      } else if (stmt.type === 'WhileStatement' && stmt.body) {
        this._hoistVarDeclarations(stmt.body.body || [stmt.body]);
      }
    }
  }

  private compileTemplate(node: any): void {
    this.emitPoly('PUSH_CONST', this.addConstant(''));
    for (let i = 0; i < node.quasis.length; i++) {
      if (node.quasis[i].value.cooked) { this.emitPoly('PUSH_CONST', this.addConstant(node.quasis[i].value.cooked)); this.emitPoly('ADD'); }
      if (node.expressions[i]) { this.compileNode(node.expressions[i]); this.emitPoly('ADD'); }
    }
  }

  private compileTaggedTemplate(node: any): void {
    this.compileNode(node.tag);
    const cooked = node.quasi.quasis.map((q: any) => q.value.cooked);
    const raw = node.quasi.quasis.map((q: any) => q.value.raw);
    this.emitPoly('PUSH_CONST', this.addConstant({ __taggedTemplate: true, strings: cooked, raw: raw }));
    for (const expr of node.quasi.expressions) this.compileNode(expr);
    this.emitPoly('CALL', node.quasi.expressions.length + 1);
  }

  private compileClass(node: any, isDeclaration: boolean): void {
    const className = node.id ? node.id.name : '__class_' + (this.funcCounter++);
    let constructorFunc: any = null; const methods: any[] = [];
    const privateFields: any[] = [];
    for (const member of node.body.body) {
      if (member.kind === 'constructor') constructorFunc = member.value;
      else if (member.type === 'MethodDefinition') methods.push(member);
      else if (member.type === 'PropertyDefinition' && member.key.type === 'PrivateIdentifier') {
        privateFields.push(member);
      }
    }
    if (constructorFunc) {
      if (node.superClass) {
        this.currentSuperClass = this.addConstant(node.superClass.name);
      }
      if (privateFields.length > 0 && constructorFunc.body.type === 'BlockStatement') {
        var _pfStmts: any[] = [];
        for (var _pfi = 0; _pfi < privateFields.length; _pfi++) {
          var _pf = privateFields[_pfi];
          if (_pf.value) {
            _pfStmts.push({
              type: 'ExpressionStatement',
              expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                  type: 'MemberExpression',
                  object: { type: 'ThisExpression' },
                  property: { type: 'PrivateIdentifier', name: _pf.key.name },
                  computed: false,
                  optional: false
                },
                right: _pf.value
              }
            });
          }
        }
        constructorFunc.body.body = _pfStmts.concat(constructorFunc.body.body);
      }
      this.compileFunction(constructorFunc);
      this.currentSuperClass = null;
    } else {
      var hasSuper = !!node.superClass;
      var funcEnd = 'func_end_' + this.currentAddr();
      this.emitJumpPoly('JMP', funcEnd);
      var funcStart = this.currentAddr();
      if (hasSuper) {
        this.currentSuperClass = this.addConstant(node.superClass.name);
        var maxArgs = 10;
        for (var ai = 0; ai < maxArgs; ai++) {
          this.emitPoly('PUSH_VAR', this.addConstant('arguments'));
          this.emitPoly('PUSH_CONST', this.addConstant(ai));
          this.emitPoly('GET_INDEX');
        }
        this.emitPoly('SUPER_CALL', maxArgs);
        this.emitPoly('POP');
        this.currentSuperClass = null;
      }
      for (var _pfi = 0; _pfi < privateFields.length; _pfi++) {
        var _pf = privateFields[_pfi];
        if (_pf.value) {
          this.emitPoly('THIS');
          this.compileNode(_pf.value);
          this.emitPoly('SET_PROP', this.addConstant('_' + _pf.key.name));
          this.emitPoly('POP');
        }
      }
      this.emitPoly('PUSH_CONST', this.addConstant(undefined));
      this.emitPoly('RETURN');
      this.setLabel(funcEnd);
      var params: string[] = [];
      this.emitPoly('PUSH_FUNC', this.addConstant({ addr: funcStart, params: params, name: null, async: false, isArrow: false }));
    }
    if (node.superClass) { this.compileNode(node.superClass); this.emitPoly('CLASS_BODY'); }
    for (const method of methods) {
      this.emitPoly('DUP');
      if (method.static) {
        this.compileFunction(method.value);
        this.emitPoly('SET_PROP', this.addConstant(method.key.name));
      } else {
        this.emitPoly('GET_PROP', this.addConstant('prototype'));
        this.compileFunction(method.value);
        this.emitPoly('SET_PROP', this.addConstant(method.key.name));
      }
      this.emitPoly('POP');
    }
    if (isDeclaration) this.emitPoly('DECLARE_VAR', this.addConstant(className));
  }
}