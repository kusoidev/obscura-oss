/**
 * Control flow compilation helpers.
 *
 * Each function emits bytecode for a specific statement type by calling
 * back into the compiler's emitPoly/emitJumpPoly/setLabel methods.
 * Labels and loop stack entries handle break/continue targeting.
 *
 * @module statements
 */

import type { BytecodeCompiler } from '../BytecodeCompiler';

/** if (test) { consequent } else { alternate } */
export function compileIf(compiler: BytecodeCompiler, node: any): void {
  const endLabel = 'if_end_' + compiler.currentAddr();
  const elseLabel = node.alternate ? 'else_' + compiler.currentAddr() : endLabel;
  compiler.compileNode(node.test);
  compiler.emitJumpPoly('JMP_IF_FALSE', elseLabel);
  var _prevBlock = compiler._currentBlockBody;
  compiler._currentBlockBody = [node.consequent];
  compiler.compileNode(node.consequent);
  if (node.alternate) { compiler.emitJumpPoly('JMP', endLabel); compiler.setLabel(elseLabel); compiler._currentBlockBody = [node.alternate]; compiler.compileNode(node.alternate); }
  compiler._currentBlockBody = _prevBlock;
  compiler.setLabel(endLabel);
}

/** switch (discriminant) { cases... } */
export function compileSwitch(compiler: BytecodeCompiler, node: any): void {
  const endLabel = 'switch_end_' + compiler.currentAddr();
  compiler.loopStack.push({ breakLabel: endLabel, continueLabel: null });
  const caseLabels = node.cases.map((_: any, i: number) => 'switch_case_' + i + '_' + compiler.currentAddr());
  const defaultIdx = node.cases.findIndex((c: any) => c.test === null);
  for (let i = 0; i < node.cases.length; i++) {
    if (node.cases[i].test) { compiler.compileNode(node.discriminant); compiler.compileNode(node.cases[i].test); compiler.emitPoly('STRICT_EQ'); compiler.emitJumpPoly('JMP_IF_TRUE', caseLabels[i]); }
  }
  if (defaultIdx !== -1) compiler.emitJumpPoly('JMP', caseLabels[defaultIdx]); else compiler.emitJumpPoly('JMP', endLabel);
  for (let i = 0; i < node.cases.length; i++) { compiler.setLabel(caseLabels[i]); for (const stmt of node.cases[i].consequent) compiler.compileNode(stmt); }
  compiler.setLabel(endLabel); compiler.loopStack.pop();
}

/** for (init; test; update) { body } */
export function compileFor(compiler: BytecodeCompiler, node: any): void {
  const testLabel = 'for_test_' + compiler.currentAddr();
  const updateLabel = 'for_update_' + compiler.currentAddr();
  const endLabel = 'for_end_' + compiler.currentAddr();
  compiler.loopStack.push({ breakLabel: endLabel, continueLabel: updateLabel });
  if (node.init) { compiler.compileNode(node.init); if (node.init.type !== 'VariableDeclaration') compiler.emitPoly('POP'); }
  compiler.setLabel(testLabel);
  if (node.test) { compiler.compileNode(node.test); compiler.emitJumpPoly('JMP_IF_FALSE', endLabel); }
  compiler.compileNode(node.body);
  compiler.setLabel(updateLabel);
  if (node.update) { compiler.compileNode(node.update); compiler.emitPoly('POP'); }
  compiler.emitJumpPoly('JMP', testLabel);
  compiler.setLabel(endLabel);
  compiler.loopStack.pop();
}

/** while (test) { body } */
export function compileWhile(compiler: BytecodeCompiler, node: any): void {
  const testLabel = 'while_test_' + compiler.currentAddr();
  const endLabel = 'while_end_' + compiler.currentAddr();
  compiler.loopStack.push({ breakLabel: endLabel, continueLabel: testLabel });
  compiler.setLabel(testLabel);
  compiler.compileNode(node.test);
  compiler.emitJumpPoly('JMP_IF_FALSE', endLabel);
  compiler.compileNode(node.body);
  compiler.emitJumpPoly('JMP', testLabel);
  compiler.setLabel(endLabel);
  compiler.loopStack.pop();
}

/** do { body } while (test) */
export function compileDoWhile(compiler: BytecodeCompiler, node: any): void {
  const startLabel = 'do_start_' + compiler.currentAddr();
  const testLabel = 'do_test_' + compiler.currentAddr();
  const endLabel = 'do_end_' + compiler.currentAddr();
  compiler.loopStack.push({ breakLabel: endLabel, continueLabel: testLabel });
  compiler.setLabel(startLabel);
  compiler.compileNode(node.body);
  compiler.setLabel(testLabel);
  compiler.compileNode(node.test);
  compiler.emitJumpPoly('JMP_IF_TRUE', startLabel);
  compiler.setLabel(endLabel);
  compiler.loopStack.pop();
}

/**
 * for (x of iterable) { body }
 *
 * Desugars to an iterator loop: get Symbol.iterator, call .next()
 * until .done, push .value before each body iteration.
 */
export function compileForOf(compiler: BytecodeCompiler, node: any): void {
  const iterLabel = 'forof_iter_' + compiler.currentAddr();
  const endLabel = 'forof_end_' + compiler.currentAddr();
  compiler.loopStack.push({ breakLabel: endLabel, continueLabel: iterLabel });
  compiler.compileNode(node.right);
  compiler.emitPoly('FOR_OF_ITER');
  const tmpIter = '__iter_' + (compiler.funcCounter++);
  const tmpResult = '__res_' + (compiler.funcCounter++);
  compiler.emitPoly('DECLARE_VAR', compiler.addConstant(tmpIter));
  compiler.setLabel(iterLabel);
  compiler.emitPoly('PUSH_VAR', compiler.addConstant(tmpIter));
  compiler.emitPoly('CALL_METHOD', 0, compiler.addConstant('next'));
  compiler.emitPoly('DECLARE_VAR', compiler.addConstant(tmpResult));
  compiler.emitPoly('PUSH_VAR', compiler.addConstant(tmpResult));
  compiler.emitPoly('GET_PROP', compiler.addConstant('done'));
  compiler.emitPoly('NOT');
  compiler.emitJumpPoly('JMP_IF_FALSE', endLabel);
  compiler.emitPoly('PUSH_VAR', compiler.addConstant(tmpResult));
  compiler.emitPoly('GET_PROP', compiler.addConstant('value'));
  if (node.left.type === 'VariableDeclaration') {
    for (const decl of node.left.declarations) {
      if (decl.id.type === 'Identifier') {
        compiler.emitPoly('DECLARE_VAR', compiler.addConstant(decl.id.name));
      } else if (decl.id.type === 'ArrayPattern') {
        var _fotmp = '__fodest_' + (compiler.funcCounter++);
        compiler.emitPoly('DECLARE_VAR', compiler.addConstant(_fotmp));
        for (var _ei = 0; _ei < decl.id.elements.length; _ei++) {
          var _el = decl.id.elements[_ei];
          if (!_el) continue;
          compiler.emitPoly('PUSH_VAR', compiler.addConstant(_fotmp));
          compiler.emitPoly('PUSH_CONST', compiler.addConstant(_ei));
          compiler.emitPoly('GET_INDEX');
          compiler.emitPoly('DECLARE_VAR', compiler.addConstant(_el.name));
        }
      }
    }
  } else if (node.left.type === 'Identifier') {
    compiler.emitPoly('STORE_VAR', compiler.addConstant(node.left.name));
  }
  compiler.compileNode(node.body);
  compiler.emitJumpPoly('JMP', iterLabel);
  compiler.setLabel(endLabel);
  compiler.loopStack.pop();
}

/**
 * for (key in object) { body }
 *
 * Collects keys via FOR_IN_ITER, then loops by index through the keys array.
 */
export function compileForIn(compiler: BytecodeCompiler, node: any): void {
  const iterLabel = 'forin_iter_' + compiler.currentAddr();
  const endLabel = 'forin_end_' + compiler.currentAddr();
  compiler.loopStack.push({ breakLabel: endLabel, continueLabel: iterLabel });
  compiler.compileNode(node.right);
  compiler.emitPoly('FOR_IN_ITER');
  const tmpKeys = '__keys_' + (compiler.funcCounter++);
  const tmpIdx = '__idx_' + (compiler.funcCounter++);
  const tmpLen = '__len_' + (compiler.funcCounter++);
  compiler.emitPoly('DECLARE_VAR', compiler.addConstant(tmpKeys));
  compiler.emitPoly('PUSH_VAR', compiler.addConstant(tmpKeys));
  compiler.emitPoly('GET_PROP', compiler.addConstant('length'));
  compiler.emitPoly('DECLARE_VAR', compiler.addConstant(tmpLen));
  compiler.emitPoly('PUSH_CONST', compiler.addConstant(0));
  compiler.emitPoly('DECLARE_VAR', compiler.addConstant(tmpIdx));
  compiler.setLabel(iterLabel);
  compiler.emitPoly('PUSH_VAR', compiler.addConstant(tmpIdx));
  compiler.emitPoly('PUSH_VAR', compiler.addConstant(tmpLen));
  compiler.emitPoly('LT');
  compiler.emitJumpPoly('JMP_IF_FALSE', endLabel);
  compiler.emitPoly('PUSH_VAR', compiler.addConstant(tmpKeys));
  compiler.emitPoly('PUSH_VAR', compiler.addConstant(tmpIdx));
  compiler.emitPoly('GET_INDEX');
  if (node.left.type === 'VariableDeclaration') {
    for (const decl of node.left.declarations) compiler.emitPoly('DECLARE_VAR', compiler.addConstant(decl.id.name));
  } else if (node.left.type === 'Identifier') {
    compiler.emitPoly('STORE_VAR', compiler.addConstant(node.left.name));
  }
  compiler.compileNode(node.body);
  compiler.emitPoly('PUSH_VAR', compiler.addConstant(tmpIdx));
  compiler.emitPoly('PUSH_CONST', compiler.addConstant(1));
  compiler.emitPoly('ADD');
  compiler.emitPoly('STORE_VAR', compiler.addConstant(tmpIdx));
  compiler.emitPoly('POP');
  compiler.emitJumpPoly('JMP', iterLabel);
  compiler.setLabel(endLabel);
  compiler.loopStack.pop();
}

/**
 * break [label];
 *
 * Without a label, pops the innermost loop's breakLabel from the loop stack.
 * With a label, looks up the labeled statement's end label.
 */
export function compileBreak(compiler: BytecodeCompiler, node: any): void {
  let target: number | string | null = null;
  if (node.label) target = compiler.labels.get(node.label.name) ?? null;
  else if (compiler.loopStack.length > 0) target = compiler.loopStack[compiler.loopStack.length - 1].breakLabel;
  if (target !== null) {
    if (typeof target === 'number') compiler.emitPoly('JMP', target);
    else compiler.emitJumpPoly('JMP', target);
  } else compiler.warnings.push('break outside loop');
}

/** continue [label] — same as break but uses continueLabel. */
export function compileContinue(compiler: BytecodeCompiler, node: any): void {
  let target: number | string | null = null;
  if (node.label) target = compiler.labels.get(node.label.name) ?? null;
  else if (compiler.loopStack.length > 0) target = compiler.loopStack[compiler.loopStack.length - 1].continueLabel;
  if (target !== null) {
    if (typeof target === 'number') compiler.emitPoly('JMP', target);
    else compiler.emitJumpPoly('JMP', target);
  } else compiler.warnings.push('continue outside loop');
}

/**
 * label: { body }
 *
 * break label jumps to the end of the labeled body, not the start.
 */
export function compileLabeled(compiler: BytecodeCompiler, node: any): void {
  const endLabel = 'labeled_' + node.label.name + '_' + compiler.currentAddr();
  compiler.labels.set(node.label.name, endLabel as any);
  compiler.compileNode(node.body);
  compiler.setLabel(endLabel);
}

/**
 * try { block } catch (e) { handler } finally { finalizer }
 *
 * Emits TRY with a placeholder constant that gets patched with the
 * catch/finally addresses after compilation. Jumps over catch/finally
 * blocks when no error occurs.
 */
export function compileTry(compiler: BytecodeCompiler, node: any): void {
  const catchStart = node.handler ? 'catch_' + compiler.currentAddr() : null;
  const finallyStart = node.finalizer ? 'finally_' + compiler.currentAddr() : null;
  const endTry = 'endtry_' + compiler.currentAddr();
  const placeholderIdx = compiler.addConstant({ catchAddr: -1, finallyAddr: -1, __tryId: compiler.currentAddr() });
  compiler.emitPoly('TRY', placeholderIdx);
  compiler.compileNode(node.block);
  compiler.emitJumpPoly('JMP', node.finalizer ? finallyStart! : endTry);
  if (node.handler) {
    compiler.setLabel(catchStart!);
    if (node.handler.param) compiler.emitPoly('DECLARE_VAR', compiler.addConstant(node.handler.param.name));
    else compiler.emitPoly('POP');
    compiler.compileNode(node.handler.body);
    compiler.emitJumpPoly('JMP', node.finalizer ? finallyStart! : endTry);
  }
  if (node.finalizer) { compiler.setLabel(finallyStart!); compiler.compileNode(node.finalizer); }
  compiler.setLabel(endTry); compiler.emitPoly('END_TRY');
  compiler.constants[placeholderIdx] = {
    catchAddr: node.handler ? compiler.labels.get(catchStart!)! : -1,
    finallyAddr: node.finalizer ? compiler.labels.get(finallyStart!)! : -1,
  };
}