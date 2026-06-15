import { OP_GROUPS } from '../compiler/Opcode';
import { ObfuscatorOptions } from '../config';
import * as fs from 'fs';
import * as path from 'path';

export interface BuildInput {
  bytecode: number[];
  constants: any[];
  externalAPIs: Set<string>;
  debugMode: boolean;
  options?: Partial<ObfuscatorOptions>;
  plainFunctions?: { name: string; source: string }[];
  pfInitCode?: string;
}

function RandomName(len: number): string {
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var res = '';
  for (var i = 0; i < len; i++) res += chars[Math.floor(Math.random() * chars.length)];
  return res;
}

function GenerateNames() {
  return {
    V: 'p' + RandomName(4) + '_' + RandomName(3),
    L: 'p' + RandomName(5) + '_' + RandomName(2),
    S: 'p' + RandomName(3) + '_' + RandomName(4),
    SU: 'p' + RandomName(4) + '_' + RandomName(2),
    R: 'p' + RandomName(4) + '_' + RandomName(4),
    XE: 'p' + RandomName(3) + '_' + RandomName(3),
    W: 'p' + RandomName(5) + '_' + RandomName(3),
    F: 'p' + RandomName(2) + '_' + RandomName(5),
    GC: 'p' + RandomName(4) + '_' + RandomName(2),
    ST: 'p' + RandomName(3) + '_' + RandomName(5),
    D: 'p' + RandomName(4) + '_' + RandomName(3),
    SP: 'p' + RandomName(3) + '_' + RandomName(2),
    SK: 'p' + RandomName(2) + '_' + RandomName(4),
    VM: 'p' + RandomName(3) + '_' + RandomName(4),
    gS: 'p' + RandomName(5) + '_' + RandomName(4),
    bI: 'p' + RandomName(3) + '_' + RandomName(3),
    G: 'p' + RandomName(4) + '_' + RandomName(5),
    XS: 'p' + RandomName(3) + '_' + RandomName(3),
  };
}

function deriveKey(seed: Uint8Array, len: number): number[] {
  var key: number[] = [];
  for (var i = 0; i < len; i++) {
    var h = seed[i % seed.length] ^ ((i * 0x9D + 0x3F) & 0xFF);
    for (var j = 0; j < seed.length; j++) h = ((h << 3) - h + seed[j]) | 0;
    key.push(h & 0xFF);
  }
  return key;
}

function xorEncrypt(data: number[], key: number[]): number[] {
  var out = [];
  for (var i = 0; i < data.length; i++) out.push(data[i] ^ key[i % key.length]);
  return out;
}

function obfuscateConstants(constants: any[]): any[] {
  var out: any[] = [];
  for (var i = 0; i < constants.length; i++) {
    var c = constants[i];
    if (c && typeof c === 'object' && c.addr !== undefined) {
      var obf: any = { a: c.addr };
      if (c.params) obf.p = c.params;
      if (c.async) obf.as = true;
      if (c.isArrow) obf.ia = true;
      if (c.name) obf.nm = c.name;
      out.push(obf);
    } else if (c === undefined) {
      out.push({ __undef: true });
    } else if (c === null) {
      out.push({ __null: true });
    } else if (typeof c === 'number' && isNaN(c)) {
      out.push({ __nan: true });
    } else if (c === Infinity) {
      out.push({ __inf: true });
    } else if (c === -Infinity) {
      out.push({ __inf: false });
    } else {
      out.push(c);
    }
  }
  return out;
}

function buildGroupIndexMap(): Record<number, number> {
  var groupNames = Object.keys(OP_GROUPS);
  var variantToGroupIdx: Record<number, number> = {};
  for (var gi = 0; gi < groupNames.length; gi++) {
    var group = OP_GROUPS[groupNames[gi]];
    for (var vi = 0; vi < group.variants.length; vi++) {
      variantToGroupIdx[group.variants[vi]] = gi;
    }
  }
  return variantToGroupIdx;
}


var generateDispatch = require("./dispatch-gen");

export function BuildVM(input: BuildInput): string {
  var template = "(async function() {\n  var __D__ = {{DEBUG_FLAG}};\n  var __E__ = {{BYTECODE}};\n  var __S__ = {{BC_SEED}};\n  var __C__ = {{CONSTANTS}};\n  var __X__ = {{EXTERNAL_APIS}};\n\n  {{DEAD_CODE}}\n\n  var {{VM_VAR_G}} = typeof global !== \"undefined\" ? global : (typeof window !== \"undefined\" ? window : this);\n  var {{VM_FN_ST}} = {{VM_VAR_G}}.setTimeout;\n\n  var __BNC__ = {{BN_CHUNKS}};\n  var __BNK__ = {{BN_KEY}};\n  var __BN__ = [];\n  var __BNI__ = 0;\n  for (var __BNJ__ = 0; __BNJ__ < __BNC__.length; ) {\n    var __BNL__ = __BNC__[__BNJ__++];\n    var __BNS__ = \"\";\n    for (var __BNK2__ = 0; __BNK2__ < __BNL__; __BNK2__++) __BNS__ += String.fromCharCode(__BNC__[__BNJ__++] ^ ((__BNK__ + __BNI__ * 7 + __BNK2__ * 13) & 255));\n    __BN__.push(__BNS__);\n    __BNI__++;\n  }\n\n  var {{VM_VAR_GS}} = new Map();\n  var {{VM_VAR_BI}} = new Map();\n  for (var i = 0; i < __BN__.length; i++) {\n    var n = __BN__[i];\n    if (typeof {{VM_VAR_G}}[n] !== \"undefined\") {\n      var _fn = {{VM_VAR_G}}[n];\n      if (n === \"setTimeout\" || n === \"clearTimeout\" || n === \"setInterval\" || n === \"clearInterval\") _fn = _fn.bind({{VM_VAR_G}});\n      {{VM_VAR_BI}}.set(n, _fn); {{VM_VAR_GS}}.set(n, _fn);\n    }\n  }\n  var __EK__ = Object.keys(__X__);\n  for (var i = 0; i < __EK__.length; i++) {\n    var k = __EK__[i], v = __X__[k];\n    if (typeof v !== \"undefined\") {\n      if ((k === \"setTimeout\" || k === \"clearTimeout\" || k === \"setInterval\" || k === \"clearInterval\") && typeof v === \"function\") v = v.bind({{VM_VAR_G}});\n      {{VM_VAR_BI}}.set(k, v); {{VM_VAR_GS}}.set(k, v);\n    }\n  }\n\n  {{PLAIN_FUNCTIONS}}\n\n  {{PF_INIT}}\n\n  var {{VM_FN_D}} = function(s, l) {\n    var k = [];\n    for (var i = 0; i < l; i++) {\n      var h = s[i % s.length] ^ ((i * 157 + 63) & 255);\n      for (var j = 0; j < s.length; j++) h = ((h << 3) - h + s[j]) | 0;\n      k.push(h & 255);\n    }\n    return k;\n  };\n\n  var __K__ = {{VM_FN_D}}(__S__, Math.max(__E__.length, 40));\n  var __B__ = new Uint8Array(__E__.length);\n  for (var i = 0; i < __E__.length; i++) __B__[i] = __E__[i] ^ __K__[i % __K__.length];\n\n\n  var __OP__ = {{OP_XOR_KEY}};\n  for (var i = 0; i < __B__.length; i++) __B__[i] ^= __OP__;\n\n  var __DC__ = [];\n  for (var i = 0; i < __C__.length; i++) {\n    var c = __C__[i];\n    if (c && typeof c.l === \"number\" && c.c) {\n      __DC__[i] = { _e: true, _l: c.l, _c: c.c, _i: i };\n    } else if (c && typeof c.a === \"number\") {\n      var fd = { addr: c.a, params: c.p || [], async: c.as || false, isArrow: c.ia || false };\n      if (c.nm) fd.name = c.nm;\n      __DC__[i] = fd;\n    } else {\n      __DC__[i] = c;\n    }\n  }\n\n  function {{VM_FN_GC}}(idx) {\n    var v = __DC__[idx];\n    if (v && v._e) {\n      var s = \"\";\n      var __SK__ = {{STR_XOR_OFFSET}};\n      for (var j = 0; j < v._l; j++) s += String.fromCharCode(v._c[j] ^ ((__SK__ + v._i * 17 + j * 31 + 73) & 255));\n      return s;\n    }\n    if (v && typeof v === \"object\") {\n      if (v.__regex) return new RegExp(v.pattern, v.flags);\n      if (v.__bigint) return BigInt(v.value);\n      if (v.__undef) return undefined;\n      if (v.__null) return null;\n      if (v.__nan) return NaN;\n      if (v.__inf !== undefined) return v.__inf ? Infinity : -Infinity;\n      if (v.__taggedTemplate) { var arr = v.strings.slice(); arr.raw = v.raw; return arr; }\n    }\n    return v;\n  }\n\n  var __OT_ALL__ = {{OPCODE_TABLES}};\n  var __OT_CUR__ = 0;\n  var __OT__ = __OT_ALL__[0];\n  var __NUM_SEG__ = {{NUM_SEGMENTS}};\n  var __SEG_KEYS__ = {{SEGMENT_KEYS}};\n\n  var __V2G__ = {{VARIANT_TO_GROUP}};\n\n  var {{VM_VAR_VM}} = [];\n\n  function {{VM_FN_V}}(pScope) {\n    this.s = []; this.i = 0; this.c = new Map();\n    if (pScope) this.c.__p = pScope;\n    this.l = []; this.t = {{VM_VAR_GS}}; this.y = []; this._retv = undefined; this._throwing = false;\n    this.fakeStack = []; this._sk = 0;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_V}});\n\n  var __SK__ = {{STACK_KEY}};\n  function {{VM_FN_SP}}(st, v) {\n    st.s.push(v);\n  }\n  function {{VM_FN_SK}}(st) {\n    var v = st.s.pop();\n    if (typeof v === \"number\" && !isNaN(v) && isFinite(v)) {\n      st._sk = Math.max(0, (st._sk || 1) - 1);\n      var kb = __SK__[(st._sk || 0) % __SK__.length];\n      if (Number.isInteger(v) && v >= -2147483648 && v <= 2147483647) {\n        return v ^ ((kb << 24) | (kb << 16) | (kb << 8) | kb);\n      } else {\n        return v - kb * 0.000001;\n      }\n    } else if (typeof v === \"string\") {\n      st._sk = Math.max(0, (st._sk || 1) - 1);\n      var kb = __SK__[(st._sk || 0) % __SK__.length];\n      var ds = \"\"; for (var i = 0; i < v.length; i++) ds += String.fromCharCode(v.charCodeAt(i) ^ kb);\n      return ds;\n    }\n    return v;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_SP}}); {{VM_VAR_VM}}.push({{VM_FN_SK}});\n  function {{VM_FN_L}}(st, name) {\n    var s = st.c;\n    while (s) { if (s.has(name)) return s.get(name); s = s.__p; }\n    if ({{VM_VAR_GS}}.has(name)) return {{VM_VAR_GS}}.get(name);\n    if ({{VM_VAR_BI}}.has(name)) return {{VM_VAR_BI}}.get(name);\n    if (typeof {{VM_VAR_G}}[name] !== \"undefined\") return {{VM_VAR_G}}[name];\n    if (typeof __PF__ !== \"undefined\" && __PF__.hasOwnProperty(name)) return __PF__[name];\n    return undefined;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_L}});\n\n  function {{VM_FN_S}}(st, name, value) {\n    var s = st.c;\n    while (s) { if (s.has(name)) { s.set(name, value); if (typeof __PF__ !== \"undefined\" && __PF__.hasOwnProperty(name)) __PF__[name] = value; return; } s = s.__p; }\n    st.c.set(name, value);\n    if (typeof __PF__ !== \"undefined\" && __PF__.hasOwnProperty(name)) __PF__[name] = value;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_S}});\n\n  function {{VM_FN_SU}}(st, name, value) {\n    var s = st.c;\n    while (s) { if (s.has(name)) { s.set(name, value); if (typeof __PF__ !== \"undefined\" && __PF__.hasOwnProperty(name)) __PF__[name] = value; return; } s = s.__p; }\n    st.c.set(name, value);\n    if (typeof __PF__ !== \"undefined\" && __PF__.hasOwnProperty(name)) __PF__[name] = value;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_SU}});\n\n  function {{VM_FN_R}}(st) {\n    var v = (__B__[st.i] << 24) | (__B__[st.i + 1] << 16) | (__B__[st.i + 2] << 8) | __B__[st.i + 3];\n    st.i += 4; return v;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_R}});\n\n  async function {{VM_FN_XE}}(st) {\n    var M = 50000000, steps = 0;\n    while (st.i < __B__.length) {\n      try {\n      if (++steps > M) throw new Error(\"VM:max steps\");\n      var opByte = __B__[st.i++] ^ ((st.i - 1) & 0xFF);\n      var gidx = __V2G__[opByte];\n      if (gidx === undefined) { __B__ = new Uint8Array(0); __DC__ = []; throw new Error(\"Unknown op:\" + opByte); }\n\n      switch (gidx) {\n{{SWITCH_BODY}}\n        default:\n          __B__ = new Uint8Array(0); __DC__ = [];\n          throw new Error(\"Unknown op:\" + opByte);\n      }\n      } catch (__vmErr__) {\n        if (st.y.length === 0) throw __vmErr__;\n        var __ti__ = st.y.pop();\n        st.s.push(__vmErr__);\n        if (__ti__.catchAddr >= 0) { st.i = __ti__.catchAddr; continue; }\n        if (__ti__.finallyAddr >= 0) { st.i = __ti__.finallyAddr; continue; }\n        throw __vmErr__;\n      }\n    }\n    return st.s.length ? st.s[st.s.length - 1] : undefined;\n  }\n  function {{VM_FN_XS}}(st) {\n    var M = 10000000, steps = 0;\n    while (st.i < __B__.length) {\n      try {\n      if (++steps > M) throw new Error(\"VM:max steps\");\n      var opByte = __B__[st.i++] ^ ((st.i - 1) & 0xFF);\n      var gidx = __V2G__[opByte];\n      if (gidx === undefined) { __B__ = new Uint8Array(0); __DC__ = []; throw new Error(\"Unknown op:\" + opByte); }\n\n      switch (gidx) {\n{{SWITCH_BODY_SYNC}}\n        default:\n          __B__ = new Uint8Array(0); __DC__ = [];\n          throw new Error(\"Unknown op:\" + opByte);\n      }\n      } catch (__vmErr__) {\n        if (st.y.length === 0) throw __vmErr__;\n        var __ti__ = st.y.pop();\n        st.s.push(__vmErr__);\n        if (__ti__.catchAddr >= 0) { st.i = __ti__.catchAddr; continue; }\n        if (__ti__.finallyAddr >= 0) { st.i = __ti__.finallyAddr; continue; }\n        throw __vmErr__;\n      }\n    }\n    return st.s.length ? st.s[st.s.length - 1] : undefined;\n  }\n\n  {{VM_VAR_VM}}.push({{VM_FN_XE}});\n  {{VM_VAR_VM}}.push({{VM_FN_XS}});\n\n  function {{VM_FN_W}}(fd, ps) {\n    var cs = ps ? ps.c : {{VM_VAR_GS}};\n    var ct = ps ? ps.t : undefined;\n    var vf = function() {\n      var a = Array.prototype.slice.call(arguments);\n      return {{VM_FN_F}}(fd, a, cs, ct, this);\n    };\n    vf._v = true; vf._o = fd;\n    vf.prototype = fd.prototype || {}; vf._s = cs; vf._ct = ct;\n    if (fd.name) { try { Object.defineProperty(vf, 'name', { value: fd.name, writable: false, configurable: true }); } catch(e) {} }\n    if (fd.params) { try { Object.defineProperty(vf, 'length', { value: fd.params.length, writable: false, configurable: true }); } catch(e) {} }\n    return vf;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_W}});\n\n  function {{VM_FN_F}}(fd, a, cs, ct, cl) {\n    var st = new {{VM_FN_V}}(cs || {{VM_VAR_GS}});\n    st._cs = cs || null;\n    var params = fd.params || [];\n    for (var i = 0; i < params.length; i++) {\n      var p = params[i];\n      if (p.charAt(0) === \".\" && p.charAt(1) === \".\" && p.charAt(2) === \".\") {\n        var rest = []; for (var j = i; j < a.length; j++) rest.push(a[j]);\n        st.c.set(p.slice(3), rest); break;\n      } else { st.c.set(p, i < a.length ? a[i] : undefined); }\n    }\n    if (!fd.isArrow) st.c.set(\"arguments\", a);\n    if (fd._this !== undefined) { st.t = fd._this; }\n    else if (fd.isArrow) { st.t = ct || {{VM_VAR_GS}}; }\n    else { st.t = cl || {{VM_VAR_GS}}; }\n    st.i = fd.addr;\n    if (fd.async) return {{VM_FN_XE}}(st); return {{VM_FN_XS}}(st);\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_F}});\n\n  Object.defineProperty(Object.prototype, '__defineGS__', { value: function(key, fn, kind) {\n    var desc = { configurable: true, enumerable: true };\n    if (kind === 'get') desc.get = fn;\n    else desc.set = fn;\n    Object.defineProperty(this, key, desc);\n  }, configurable: true, writable: true });\n\n  var eF = { addr: 0, params: [], _scope: {{VM_VAR_GS}} };\n  var __result__ = await {{VM_FN_F}}(eF, [], {{VM_VAR_GS}}, undefined, {{VM_VAR_GS}});\n  await new Promise(function(r) { {{VM_FN_ST}}(r, {{KEEPALIVE_MS}}); });\n  return __result__;\n})();";

  var opts: ObfuscatorOptions = {
    mangleIdentifiers: true,
    injectJunkExpressions: true,
    xorEncryptBytecode: true,
    minifyOutput: true,
    debugMode: false,
    ...(input.options || {}),
  };

  var names = GenerateNames();
  var seed = new Uint8Array(32);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(seed);
  } else {
    for (var _si = 0; _si < 32; _si++) seed[_si] = Math.floor(Math.random() * 256);
  }

  var finalBytecode = input.bytecode.slice();
  if (opts.xorEncryptBytecode) {
    var key = deriveKey(seed, Math.max(input.bytecode.length, 40));
    finalBytecode = xorEncrypt(input.bytecode, key);
  }

  var finalConstants = obfuscateConstants(input.constants);

  var builtinNames = ["Object","Array","String","Number","Boolean","Function","RegExp","Date","Error","Math","JSON","Promise","Map","Set","Symbol","Infinity","NaN","undefined","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","TypeError","URIError","SyntaxError","RangeError","ReferenceError","EvalError","TypeError","URIError","SyntaxError","RangeError","ReferenceError","EvalError","console","setTimeout","clearTimeout","setInterval","clearInterval"];
  var bnKey = seed[3] ^ seed[11] ^ seed[19] ^ seed[27];
  var bnChunks: number[] = [];
  for (var bi = 0; bi < builtinNames.length; bi++) {
    var bn = builtinNames[bi];
    bnChunks.push(bn.length);
    for (var bj = 0; bj < bn.length; bj++) bnChunks.push(bn.charCodeAt(bj) ^ ((bnKey + bi * 7 + bj * 13) & 255));
  }

  var numSegments = 1;
  var segmentTables = [[0]];
  var variantToGroupIdx = buildGroupIndexMap();
  var variantToGroupEntries: string[] = [];
  for (var vb = 0; vb < 256; vb++) {
    if (variantToGroupIdx[vb] !== undefined) {
      variantToGroupEntries.push(vb + ':' + variantToGroupIdx[vb]);
    }
  }
  var variantToGroupObj = '{' + variantToGroupEntries.join(',') + '}';
  var segmentKeys = [0];

  var switchBodies = generateDispatch(names.GC, names.R, names.L, names.S, names.SU, names.W, names.F, names.XE, names.gS, names.SP, names.SK, Object.keys(OP_GROUPS));

  var opTableJSON = JSON.stringify(segmentTables);

  var stackKey: number[] = [];
  for (var ski = 0; ski < 16; ski++) stackKey.push(0);


  var plainFunctionsCode = '';
  if (input.plainFunctions && input.plainFunctions.length > 0) {
    for (var pfi = 0; pfi < input.plainFunctions.length; pfi++) {
      var pf = input.plainFunctions[pfi];
      plainFunctionsCode += pf.source + ';\n' + names.gS + '.set(' + JSON.stringify(pf.name) + ', ' + pf.name + ');\n';
    }
  }

  var templateVars: Record<string, string> = {
    '{{DEBUG_FLAG}}': 'false',
    '{{BYTECODE}}': JSON.stringify(finalBytecode),
    '{{BC_SEED}}': JSON.stringify(Array.from(seed)),
    '{{CONSTANTS}}': JSON.stringify(finalConstants),
    '{{VM_FN_V}}': names.V,
    '{{VM_FN_L}}': names.L,
    '{{VM_FN_S}}': names.S,
    '{{VM_FN_SU}}': names.SU,
    '{{VM_FN_R}}': names.R,
    '{{VM_FN_XE}}': names.XE,
    '{{VM_FN_XS}}': names.XS,
    '{{VM_FN_W}}': names.W,
    '{{VM_FN_F}}': names.F,
    '{{VM_FN_GC}}': names.GC,
    '{{VM_FN_ST}}': names.ST,
    '{{VM_FN_D}}': names.D,
    '{{VM_FN_SP}}': names.SP,
    '{{VM_FN_SK}}': names.SK,
    '{{VM_VAR_VM}}': names.VM,
    '{{VM_VAR_GS}}': names.gS,
    '{{VM_VAR_BI}}': names.bI,
    '{{VM_VAR_G}}': names.G,
    '{{BN_CHUNKS}}': JSON.stringify(bnChunks),
    '{{BN_KEY}}': String(bnKey),
    '{{KEEPALIVE_MS}}': String(30 + Math.floor(Math.random() * 51)),
    '{{STR_XOR_OFFSET}}': '0',
    '{{BC_INTEGRITY}}': '0',
    '{{DEAD_CODE}}': '',
    '{{PLAIN_FUNCTIONS}}': plainFunctionsCode,
    '{{PF_INIT}}': input.pfInitCode || '',
    '{{SWITCH_BODY}}': switchBodies.async,
    '{{SWITCH_BODY_SYNC}}': switchBodies.sync,
    '{{OPCODE_TABLES}}': opTableJSON,
    '{{VARIANT_TO_GROUP}}': variantToGroupObj,
    '{{NUM_SEGMENTS}}': String(numSegments),
    '{{SEGMENT_KEYS}}': JSON.stringify(segmentKeys),
    '{{OP_XOR_KEY}}': '0',
    '{{STACK_KEY}}': JSON.stringify(stackKey),
  };

  var apiList = Array.from(input.externalAPIs);
  var apiObjStr = '{}';
  if (apiList.length > 0) {
    apiObjStr = '{' + apiList.map(function(a) { return JSON.stringify(a) + ':typeof ' + a + '!==\"undefined\"?' + a + ':undefined'; }).join(',') + '}';
  }
  templateVars['{{EXTERNAL_APIS}}'] = apiObjStr;

  for (var k in templateVars) {
    template = template.split(k).join(templateVars[k]);
  }

  return template;
}
