import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import * as astring from 'astring';
import { BytecodeCompiler } from './compiler/BytecodeCompiler';
import { BuildVM } from './runtime/Builder';
import { ObfuscatorOptions, defaultOptions } from './config';

export interface ObfuscateResult {
  code: string;
  stats: {
    sourceSize: number;
    bytecodeSize: number;
    constantCount: number;
    outputSize: number;
    excludedFunctions: string[];
    warnings: string[];
  };
}

function Minify(code: string): string {
  var out = '';
  var inString: string | null = null;
  for (var i = 0; i < code.length; i++) {
    var ch = code[i];
    if (inString) {
      out += ch;
      if (ch === '\\') { i++; out += code[i]; }
      else if (ch === inString) inString = null;
    } else if (ch === '"' || ch === "'") {
      inString = ch;
      out += ch;
    } else if (ch === '/' && code[i+1] === '/') {
      while (i < code.length && code[i] !== '\n') i++;
      if (code[i] === '\n') out += '\n';
    } else {
      out += ch;
    }
  }
  return out.replace(/\s+/g, ' ').replace(/ ([{}();,:])/g, '$1').replace(/([{}();,:]) /g, '$1').trim();
}

function findFunctionsToExclude(ast: any): Set<any> {
  var excludeSet = new Set<any>();
  var comments = (ast as any).comments || [];
  var functions: any[] = [];
  walk.simple(ast, { FunctionDeclaration: function(node: any) { functions.push(node); } });
  comments.sort(function(a: any, b: any) { return a.start - b.start; });
  var lastUsed = -1;
  for (var ci = 0; ci < comments.length; ci++) {
    var comment = comments[ci];
    if (comment.type === 'Line' && comment.value.trim() === '@no-vm') {
      for (var fi = 0; fi < functions.length; fi++) {
        if (functions[fi].start > comment.end && functions[fi].start > lastUsed) {
          excludeSet.add(functions[fi]);
          lastUsed = functions[fi].end;
          break;
        }
      }
    }
  }
  return excludeSet;
}

function cloneASTWithoutExcluded(ast: any, excludeSet: Set<any>): any {
  if (!ast || typeof ast !== 'object') return ast;
  if (Array.isArray(ast)) {
    var newArr: any[] = [];
    for (var i = 0; i < ast.length; i++) {
      var cloned = cloneASTWithoutExcluded(ast[i], excludeSet);
      if (cloned !== undefined) newArr.push(cloned);
    }
    return newArr;
  }
  if (excludeSet.has(ast)) return undefined;
  var newObj: any = {};
  for (var key in ast) {
    if (key === 'start' || key === 'end' || key === 'loc' || key === 'range' || key === 'comments') continue;
    var val = cloneASTWithoutExcluded(ast[key], excludeSet);
    if (val !== undefined) newObj[key] = val;
  }
  return newObj;
}


function collectDeclaredNames(node: any, names: Set<string>, isProp: boolean): void {
  if (!node || typeof node !== 'object' || isProp) return;
  if (node.type === 'VariableDeclaration') {
    for (var di = 0; di < node.declarations.length; di++) {
      var decl = node.declarations[di];
      if (decl.id.type === 'Identifier') names.add(decl.id.name);
      else if (decl.id.type === 'ArrayPattern') {
        for (var ei = 0; ei < decl.id.elements.length; ei++) {
          var el = decl.id.elements[ei];
          if (el && el.type === 'Identifier') names.add(el.name);
        }
      } else if (decl.id.type === 'ObjectPattern') {
        for (var pi = 0; pi < decl.id.properties.length; pi++) {
          var prop = decl.id.properties[pi];
          if (prop.value.type === 'Identifier') names.add(prop.value.name);
        }
      }
    }
    return;
  }
  if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') {
    if (node.id) names.add(node.id.name);
    if (node.params) {
      for (var pi = 0; pi < node.params.length; pi++) {
        var p = node.params[pi];
        if (p.type === 'Identifier') names.add(p.name);
        else if (p.type === 'RestElement' && p.argument.type === 'Identifier') names.add(p.argument.name);
        else if (p.type === 'AssignmentPattern' && p.left.type === 'Identifier') names.add(p.left.name);
      }
    }
    return;
  }
  if (node.type === 'CatchClause') {
    if (node.param && node.param.type === 'Identifier') names.add(node.param.name);
    return;
  }
  for (var key in node) {
    if (key === 'start' || key === 'end' || key === 'loc' || key === 'range' || key === 'comments' || key === 'type') continue;
    var val = node[key];
    var childIsProp = key === 'property' && node.type === 'MemberExpression' && !node.computed;
    if (Array.isArray(val)) { for (var ai = 0; ai < val.length; ai++) collectDeclaredNames(val[ai], names, false); }
    else if (val && typeof val === 'object') collectDeclaredNames(val, names, childIsProp);
  }
}

function collectFreeVariables(node: any, declared: Set<string>, free: Set<string>, parentIsProp: boolean): void {
  if (!node || typeof node !== 'object' || parentIsProp) return;
  if (node.type === 'Identifier' && !declared.has(node.name)) {
    free.add(node.name);
  } else if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') {
    return;
  } else if (node.type === 'CatchClause') {
    var catchDeclared = new Set(declared);
    if (node.param && node.param.type === 'Identifier') catchDeclared.add(node.param.name);
    collectFreeVariablesInBody(node.body, catchDeclared, free);
    return;
  }
  for (var key in node) {
    if (key === 'start' || key === 'end' || key === 'loc' || key === 'range' || key === 'comments' || key === 'type') continue;
    var val = node[key];
    var childIsProp = key === 'property' && node.type === 'MemberExpression' && !node.computed;
    if (Array.isArray(val)) { for (var ai = 0; ai < val.length; ai++) collectFreeVariables(val[ai], declared, free, false); }
    else if (val && typeof val === 'object') collectFreeVariables(val, declared, free, childIsProp);
  }
}

function collectFreeVariablesInBody(node: any, declared: Set<string>, free: Set<string>): void {
  if (!node) return;
  if (Array.isArray(node)) {
    for (var ai = 0; ai < node.length; ai++) collectFreeVariables(node[ai], declared, free, false);
  } else if (node.type === 'BlockStatement') {
    collectDeclaredNames(node, declared, false);
    if (node.body) { for (var bi = 0; bi < node.body.length; bi++) collectFreeVariables(node.body[bi], declared, free, false); }
  } else {
    collectFreeVariables(node, declared, free, false);
  }
}

function rewriteFreeVars(node: any, freeVars: Set<string>, pfName: string, isProp?: boolean): void {
  if (!node || typeof node !== 'object' || isProp) return;
  if (node.type === 'Identifier' && freeVars.has(node.name) && node.name !== pfName) {
    node.type = 'MemberExpression';
    node.object = { type: 'Identifier', name: pfName, start: node.start, end: node.start };
    node.property = { type: 'Identifier', name: node.name, start: node.start, end: node.end };
    node.computed = false;
    node.optional = false;
    delete node.name;
    return;
  }
  if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') {
    return;
  }
  for (var key in node) {
    if (key === 'start' || key === 'end' || key === 'loc' || key === 'range' || key === 'comments' || key === 'type') continue;
    var val = node[key];
    var childIsProp = key === 'property' && node.type === 'MemberExpression' && !node.computed;
    if (Array.isArray(val)) { for (var ai = 0; ai < val.length; ai++) rewriteFreeVars(val[ai], freeVars, pfName, false); }
    else if (val && typeof val === 'object') rewriteFreeVars(val, freeVars, pfName, childIsProp);
  }
}

function collectTopLevelDeclarations(ast: any): { name: string; init: string | null }[] {
  var decls: { name: string; init: string | null }[] = [];
  for (var si = 0; si < ast.body.length; si++) {
    var stmt = ast.body[si];
    if (stmt.type === 'VariableDeclaration') {
      for (var di = 0; di < stmt.declarations.length; di++) {
        var decl = stmt.declarations[di];
        var name: string | null = null;
        if (decl.id.type === 'Identifier') name = decl.id.name;
        if (name) {
          var init: string | null = null;
          if (decl.init) { try { init = astring.generate(decl.init); } catch(e) { init = null; } }
          decls.push({ name: name, init: init });
        }
      }
    }
  }
  return decls;
}

function hashStringLiterals(source: string): { source: string; hashFn: string } {
  var ast = acorn.parse(source, { ecmaVersion: 2022, sourceType: "module", locations: true });
  var constMap: any = {};
  var replaced = new Set();

  function collect(node: any) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) { for (var ci = 0; ci < node.length; ci++) collect(node[ci]); return; }
    if (node.type === "VariableDeclaration" && node.kind === "const") {
      for (var di = 0; di < node.declarations.length; di++) {
        var d: any = node.declarations[di];
        if (d.init && d.init.type === "Literal" && typeof d.init.value === "string" && d.id && d.id.type === "Identifier") {
          constMap[d.id.name] = d.init.value;
        }
      }
    }
    for (var k in node) {
      if (k === "type" || k === "start" || k === "end" || k === "loc" || k === "range") continue;
      collect(node[k]);
    }
  }
  collect(ast);

  function replace(node: any) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) { for (var ri = 0; ri < node.length; ri++) replace(node[ri]); return; }
    if (node.type === "BinaryExpression" && (node.operator === "===" || node.operator === "!==")) {
      var didReplace = false;
      if (node.right.type === "Identifier" && constMap[node.right.name] !== undefined) {
        replaced.add(node.right.name);
        node.left = wrapInHash(node.left);
        node.right = { type: "Literal", value: djb2(constMap[node.right.name]), raw: JSON.stringify(djb2(constMap[node.right.name])) };
        didReplace = true;
      } else if (node.left.type === "Identifier" && constMap[node.left.name] !== undefined) {
        replaced.add(node.left.name);
        node.right = wrapInHash(node.right);
        node.left = { type: "Literal", value: djb2(constMap[node.left.name]), raw: JSON.stringify(djb2(constMap[node.left.name])) };
        didReplace = true;
      } else if (node.right.type === "Literal" && typeof node.right.value === "string") {
        node.left = wrapInHash(node.left);
        node.right = { type: "Literal", value: djb2(node.right.value), raw: JSON.stringify(djb2(node.right.value)) };
        didReplace = true;
      } else if (node.left.type === "Literal" && typeof node.left.value === "string") {
        node.right = wrapInHash(node.right);
        node.left = { type: "Literal", value: djb2(node.left.value), raw: JSON.stringify(djb2(node.left.value)) };
        didReplace = true;
      }
      if (didReplace) replaced.add("__h__");
    }
    for (var k in node) {
      if (k === "type" || k === "start" || k === "end" || k === "loc" || k === "range") continue;
      replace(node[k]);
    }
  }
  function wrapInHash(expr: any): any {
    return {
      type: "CallExpression",
      callee: { type: "Identifier", name: "__h__" },
      arguments: [expr],
    };
  }
  replace(ast);

  if (replaced.size === 0) return { source: source, hashFn: "" };

  function removeUnused(node: any) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) { for (var ui = 0; ui < node.length; ui++) removeUnused(node[ui]); return; }
    if (node.body && Array.isArray(node.body)) {
      node.body = node.body.filter(function(stmt: any) {
        if (stmt.type === "VariableDeclaration") {
          var kept: any[] = [];
          for (var di = 0; di < stmt.declarations.length; di++) {
            var d = stmt.declarations[di];
            if (d.id && d.id.type === "Identifier" && replaced.has(d.id.name) && d.init && d.init.type === "Literal" && typeof d.init.value === "string") continue;
            kept.push(d);
          }
          if (kept.length === 0) return false;
          stmt.declarations = kept;
          return true;
        }
        return true;
      });
    }
    for (var k in node) {
      if (k === "type" || k === "start" || k === "end" || k === "loc" || k === "range") continue;
      removeUnused(node[k]);
    }
  }
  removeUnused(ast);

  return { source: astring.generate(ast), hashFn: "function __h__(s){var h=5381;for(var i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return (h>>>0).toString(16);}" };
}
function djb2(s: string): string { var h = 5381; for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(16); }

export function ObfuscateSource(source: string, options?: Partial<ObfuscatorOptions>): ObfuscateResult {
  var opts: ObfuscatorOptions = { ...defaultOptions(), ...options };
  var warnings: string[] = [];

  var hashResult = hashStringLiterals(source);
  var compileSource = hashResult.source;
  var hashFnStr = hashResult.hashFn;

  var comments: any[] = [];
  var ast = acorn.parse(compileSource, {
    ecmaVersion: 2022,
    sourceType: 'module',
    locations: true,
    onComment: comments,
  });
  (ast as any).comments = comments;

  var excludeSet = findFunctionsToExclude(ast);
  var plainFunctions: { name: string; source: string }[] = [];
  var functionNames: string[] = [];
  var allFreeVars = new Set<string>();
  var excludedNames = new Set<string>();

  excludeSet.forEach(function(fn: any) {
    if (fn.id && fn.id.name) excludedNames.add(fn.id.name);
  });

  excludeSet.forEach(function(fn: any) {
    var name = fn.id ? fn.id.name : null;
    if (!name) return;

    var declared = new Set<string>();
    if (fn.id) declared.add(fn.id.name);
    if (fn.params) {
      for (var pi = 0; pi < fn.params.length; pi++) {
        var p = fn.params[pi];
        if (p.type === 'Identifier') declared.add(p.name);
        else if (p.type === 'RestElement' && p.argument.type === 'Identifier') declared.add(p.argument.name);
        else if (p.type === 'AssignmentPattern' && p.left.type === 'Identifier') declared.add(p.left.name);
      }
    }
    collectDeclaredNames(fn.body, declared, false);

    var freeVars = new Set<string>();
    if (fn.body && typeof fn.body === 'object') collectFreeVariablesInBody(fn.body, declared, freeVars);

    excludedNames.forEach(function(en) { freeVars.delete(en); });
    var builtins = new Set(['undefined','NaN','Infinity','console','Math','JSON','Promise','Object','Array','String','Number','Boolean','Function','RegExp','Date','Error','Map','Set','Symbol','parseInt','parseFloat','isNaN','isFinite','eval','decodeURI','decodeURIComponent','encodeURI','encodeURIComponent','TypeError','URIError','SyntaxError','RangeError','ReferenceError','EvalError']);
    builtins.forEach(function(bi) { freeVars.delete(bi); });

    freeVars.forEach(function(fv) { allFreeVars.add(fv); });

    var fnClone = JSON.parse(JSON.stringify(fn));
    if (fnClone.body && typeof fnClone.body === 'object') rewriteFreeVars(fnClone.body, freeVars, '__PF__', false);
    var source = astring.generate(fnClone);

    plainFunctions.push({ name: name, source: source });
    functionNames.push(name);
  });

  var topDecls = collectTopLevelDeclarations(ast);
  var pfInitCode = 'var __PF__ = {};';
  for (var di = 0; di < topDecls.length; di++) {
    if (allFreeVars.has(topDecls[di].name)) {
      pfInitCode += '__PF__.' + topDecls[di].name + ' = ' + (topDecls[di].init || 'undefined') + ';';
    }
  }

  var filteredAst = cloneASTWithoutExcluded(ast, excludeSet);
  var filteredSource = astring.generate(filteredAst);

  var compiler = new BytecodeCompiler();
  var preserveSet = new Set(functionNames);
  allFreeVars.forEach(function(fv) { preserveSet.add(fv); });
  var allBuiltins = ['undefined','NaN','Infinity','console','Math','JSON','Promise','Object','Array','String','Number','Boolean','Function','RegExp','Date','Error','Map','Set','Symbol','parseInt','parseFloat','isNaN','isFinite','eval','decodeURI','decodeURIComponent','encodeURI','encodeURIComponent','TypeError','URIError','SyntaxError','RangeError','ReferenceError','EvalError','__h__'];
  for (var bi = 0; bi < allBuiltins.length; bi++) preserveSet.add(allBuiltins[bi]);
  var compileResult = compiler.Compile(filteredSource, preserveSet, opts.injectJunkExpressions);
  var bytecode = compileResult.bytecode;
  var constants = compileResult.constants;
  var externalAPIs = compileResult.externalAPIs;
  var compileWarnings = compileResult.warnings;

  for (var wi = 0; wi < compileWarnings.length; wi++) warnings.push(compileWarnings[wi]);

  var vmCode = BuildVM({
    bytecode: bytecode,
    constants: constants,
    externalAPIs: externalAPIs,
    debugMode: opts.debugMode || false,
    options: opts,
    plainFunctions: plainFunctions,
    pfInitCode: pfInitCode,
    hashFnStr: hashFnStr,
  });

  var outputCode = vmCode;
  if (opts.minifyOutput) {
    outputCode = Minify(vmCode);
  }

  return {
    code: outputCode,
    stats: {
      sourceSize: source.length,
      bytecodeSize: bytecode.length,
      constantCount: constants.length,
      outputSize: outputCode.length,
      excludedFunctions: functionNames,
      warnings: warnings,
    },
  };
}
