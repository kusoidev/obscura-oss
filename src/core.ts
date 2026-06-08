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
  code = code.replace(/\/\/.*$/gm, '');
  return code.replace(/\s+/g, ' ').replace(/ ([{}();,:])/g, '$1').replace(/([{}();,:]) /g, '$1').trim();
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

export function ObfuscateSource(source: string, options?: Partial<ObfuscatorOptions>): ObfuscateResult {
  var opts: ObfuscatorOptions = { ...defaultOptions(), ...options };
  var warnings: string[] = [];

  var comments: any[] = [];
  var ast = acorn.parse(source, {
    ecmaVersion: 2022,
    sourceType: 'module',
    locations: true,
    onComment: comments,
  });
  (ast as any).comments = comments;

  var excludeSet = findFunctionsToExclude(ast);
  var plainFunctionsCode: string[] = [];
  var functionNames: string[] = [];

  excludeSet.forEach(function(fn: any) {
    var name = fn.id ? fn.id.name : null;
    var code = astring.generate(fn);
    if (name) {
      plainFunctionsCode.push('globalThis.' + name + ' = ' + code);
      functionNames.push(name);
    } else {
      plainFunctionsCode.push(code);
    }
  });

  var filteredAst = cloneASTWithoutExcluded(ast, excludeSet);
  var filteredSource = astring.generate(filteredAst);

  var compiler = new BytecodeCompiler();
  var preserveSet = new Set(functionNames);
  var compileResult = compiler.Compile(filteredSource, preserveSet, opts.injectJunkExpressions);
  var bytecode = compileResult.bytecode;
  var constants = compileResult.constants;
  var externalAPIs = compileResult.externalAPIs;
  var compileWarnings = compileResult.warnings;

  for (var ni = 0; ni < functionNames.length; ni++) externalAPIs.add(functionNames[ni]);
  for (var wi = 0; wi < compileWarnings.length; wi++) warnings.push(compileWarnings[wi]);

  var vmCode = BuildVM({
    bytecode: bytecode,
    constants: constants,
    externalAPIs: externalAPIs,
    debugMode: opts.debugMode || false,
    options: opts,
  });

  var combined = '';
  if (plainFunctionsCode.length > 0) {
    combined = plainFunctionsCode.join(';\n') + ';\n';
  }
  combined += vmCode;

  var outputCode = combined;
  if (opts.minifyOutput) {
    outputCode = Minify(combined);
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
