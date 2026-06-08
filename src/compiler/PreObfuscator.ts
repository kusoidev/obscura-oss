const MANGLE_POOL = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  '_','$',
];

function randomMangle(existing: Set<string>): string {
  var len = 3 + Math.floor(Math.random() * 8);
  var name = '';
  for (var i = 0; i < len; i++) {
    name += MANGLE_POOL[Math.floor(Math.random() * MANGLE_POOL.length)];
  }
  if (existing.has(name)) return randomMangle(existing);
  existing.add(name);
  return name;
}

const RESERVED = new Set([
  'Object','Array','String','Number','Boolean','Function','RegExp','Date','Error',
  'Math','JSON','Promise','Map','Set','Symbol','console','window','global','globalThis','this','prompt','alert','confirm','document',
  'undefined','null','true','false','Infinity','NaN','eval','arguments',
  'parseInt','parseFloat','isNaN','isFinite','setTimeout','clearTimeout',
  'setInterval','clearInterval','require','module','exports','__dirname','__filename',
  'ArrayBuffer','Uint8Array','Int32Array','DataView','TextEncoder','TextDecoder',
  'Reflect','Proxy','WeakMap','WeakSet','BigInt','Symbol',
  'async','await','yield','return','if','else','for','while','do','switch','case',
  'break','continue','try','catch','finally','throw','new','delete','typeof',
  'instanceof','in','of','class','extends','super','import','export','default',
  'let','const','var','function','void','debugger',
]);

const RESERVED_PROPS = new Set([
  'log','warn','error','info','debug','trace','dir','table','assert','clear','count',
  'group','groupEnd','time','timeEnd','profile','profileEnd',
  'length','name','prototype','constructor','call','apply','bind',
  'toString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable',
  'push','pop','shift','unshift','splice','slice','join','concat','reverse','sort',
  'indexOf','lastIndexOf','includes','find','findIndex','filter','map','reduce',
  'forEach','some','every','flat','flatMap','keys','values','entries',
  'then','catch','finally','next','done','value','get','set','has','delete','clear',
  'random','floor','ceil','round','abs','max','min','pow','sqrt','sin','cos','tan',
  'now','parse','stringify',
  'split','replace','match','search','toUpperCase','toLowerCase','charAt','charCodeAt',
  'substring','substr','trim','startsWith','endsWith','repeat','padStart','padEnd',
]);

export interface PreObfuscateOptions {
  mangleIdentifiers: boolean;
  injectOpaquePredicates: boolean;
  injectJunkExpressions: boolean;
  preserve?: Set<string>;
  seed?: number;
}

/**
 * Run all enabled pre-obfuscation transforms on the given AST in place.
 */
export function preObfuscateAST(ast: any, options: PreObfuscateOptions): void {
  if (options.preserve) { for (var _pn of options.preserve) RESERVED.add(_pn); }
  var mangleMap = new Map<string, string>();
  var mangleUsed = new Set<string>();
  var scopeStack: Set<string>[] = [new Set(RESERVED)];

  function currentScope(): Set<string> {
    return scopeStack[scopeStack.length - 1];
  }

  function pushScope(): void {
    scopeStack.push(new Set(currentScope()));
  }

  function popScope(): void {
    scopeStack.pop();
  }

  function getMangled(name: string): string {
    if (RESERVED.has(name) || RESERVED_PROPS.has(name)) return name;
    if (mangleMap.has(name)) return mangleMap.get(name)!;
    var mangled = randomMangle(mangleUsed);
    mangleMap.set(name, mangled);
    currentScope().add(mangled);
    return mangled;
  }

  function walk(node: any, parent?: any, key?: string): void {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) walk(node[i], node, String(i));
      return;
    }

    switch (node.type) {
      case 'Program':
        pushScope();
        for (var i = 0; i < node.body.length; i++) walk(node.body[i], node, 'body');
        popScope();
        return;

      case 'FunctionDeclaration':
      case 'FunctionExpression':
      case 'ArrowFunctionExpression':
        pushScope();
        if (node.id && options.mangleIdentifiers) {
          node.id.name = getMangled(node.id.name);
        }
        if (node.params) {
          for (var i = 0; i < node.params.length; i++) {
            var p = node.params[i];
            if (p.type === 'Identifier' && options.mangleIdentifiers) {
              var pName = getMangled(p.name);
              currentScope().add(pName);
              p.name = pName;
            } else {
              walk(p, node, 'params');
            }
          }
        }
        if (node.body) walk(node.body, node, 'body');
        popScope();
        return;

      case 'BlockStatement':
        pushScope();
        for (var i = 0; i < node.body.length; i++) walk(node.body[i], node, 'body');
        popScope();
        return;

      case 'VariableDeclaration':
        for (var i = 0; i < node.declarations.length; i++) {
          var decl = node.declarations[i];
          if (decl.id && decl.id.type === 'Identifier' && options.mangleIdentifiers) {
            var declName = getMangled(decl.id.name);
            currentScope().add(declName);
            decl.id.name = declName;
          } else if (decl.id) {
            walk(decl.id, decl, 'id');
          }
          if (decl.init) walk(decl.init, decl, 'init');
        }
        return;

      case 'Identifier':
        if (options.mangleIdentifiers && node.name && !RESERVED.has(node.name)) {
          if (!parent || parent.type !== 'MemberExpression' || parent.computed || parent.property !== node) {
            if (!parent || parent.type !== 'Property' || parent.computed || parent.key !== node) {
              node.name = getMangled(node.name);
            }
          }
        }
        break;

      case 'MemberExpression':
        walk(node.object, node, 'object');
        if (node.computed) {
          walk(node.property, node, 'property');
        }
        return;

      case 'Property':
        if (node.computed) {
          walk(node.key, node, 'key');
        }
        walk(node.value, node, 'value');
        return;

      case 'MethodDefinition':
        walk(node.value, node, 'value');
        if (node.computed) {
          walk(node.key, node, 'key');
        }
        return;

      case 'ClassDeclaration':
      case 'ClassExpression':
        pushScope();
        if (node.id && options.mangleIdentifiers) {
          node.id.name = getMangled(node.id.name);
        }
        if (node.superClass) walk(node.superClass, node, 'superClass');
        if (node.body && node.body.body) {
          for (var i = 0; i < node.body.body.length; i++) {
            walk(node.body.body[i], node.body, 'body');
          }
        }
        popScope();
        return;

      case 'CatchClause':
        pushScope();
        if (node.param && node.param.type === 'Identifier' && options.mangleIdentifiers) {
          var catchName = getMangled(node.param.name);
          currentScope().add(catchName);
          node.param.name = catchName;
        }
        if (node.body) walk(node.body, node, 'body');
        popScope();
        return;
    }

    for (var k of Object.keys(node)) {
      if (k === 'type' || k === 'start' || k === 'end' || k === 'loc' || k === 'range') continue;
      var child = node[k];
      if (child && typeof child === 'object') {
        walk(child, node, k);
      }
    }
  }

  function injectOpaquePredicates(body: any[]): any[] {
    if (!options.injectOpaquePredicates) return body;
    var newBody: any[] = [];
    var counter = 0;
    for (var i = 0; i < body.length; i++) {
      if (counter > 1 + Math.floor(Math.random() * 3) && body[i].type !== 'ImportDeclaration' && body[i].type !== 'ExportDeclaration') {
        counter = 0;
        var opaque = {
          type: 'IfStatement',
          test: {
            type: 'BinaryExpression',
            left: {
              type: 'CallExpression',
              callee: { type: 'MemberExpression', object: { type: 'Identifier', name: 'Math' }, property: { type: 'Identifier', name: 'random' }, computed: false },
              arguments: [],
            },
            operator: '<',
            right: { type: 'Literal', value: 0, raw: '0' },
          },
          consequent: {
            type: 'BlockStatement',
            body: [
              { type: 'ExpressionStatement', expression: { type: 'CallExpression', callee: { type: 'Identifier', name: 'console' }, arguments: [{ type: 'Literal', value: 'never', raw: "'never'" }] } },
            ],
          },
          alternate: null,
        };
        newBody.push(opaque);
      }
      newBody.push(body[i]);
      counter++;
    }
    return newBody;
  }

  function injectJunkExpressions(body: any[]): any[] {
    if (!options.injectJunkExpressions) return body;
    var newBody: any[] = [];
    for (var i = 0; i < body.length; i++) {
      if (i > 0 && i % (3 + Math.floor(Math.random() * 4)) === 0 && body[i].type !== 'ImportDeclaration') {
        var junkName = '_j' + randomMangle(mangleUsed);
        newBody.push({
          type: 'VariableDeclaration',
          kind: 'var',
          declarations: [{
            type: 'VariableDeclarator',
            id: { type: 'Identifier', name: junkName },
            init: {
              type: 'BinaryExpression',
              left: { type: 'Literal', value: Math.floor(Math.random() * 99999), raw: String(Math.floor(Math.random() * 99999)) },
              operator: '>>',
              right: { type: 'Literal', value: (1 + Math.floor(Math.random() * 8)), raw: String(1 + Math.floor(Math.random() * 8)) },
            },
          }],
        });
      }
      newBody.push(body[i]);
    }
    return newBody;
  }

  if (options.mangleIdentifiers) {
    walk(ast);
  }

  if (options.injectOpaquePredicates || options.injectJunkExpressions) {
    if (ast.type === 'Program' && ast.body) {
      ast.body = injectOpaquePredicates(ast.body);
      ast.body = injectJunkExpressions(ast.body);
    }
  }
}