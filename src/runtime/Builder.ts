import { OP_GROUPS } from '../compiler/Opcode';
import { ObfuscatorOptions } from '../config';

export interface BuildInput {
  bytecode: number[];
  constants: any[];
  externalAPIs: Set<string>;
  debugMode: boolean;
  options?: Partial<ObfuscatorOptions>;
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


var generateDispatch = function(G: any, R: any, L: any, S: any, SU: any, W: any, F: any, XE: any, gS: any, SP: any, SK: any, groupNames: any) {
  var lines = [];
  var body;

  for (var gi = 0; gi < groupNames.length; gi++) {
    var gn = groupNames[gi];
    switch (gn) {
      case 'HALT': body = 'return st.s.length?st.s[st.s.length-1]:undefined;'; break;
      case 'PUSH_CONST': body = 'st.s.push(' + G + '(' + R + '(st)));'; break;
      case 'PUSH_VAR': body = 'st.s.push(' + L + '(st,' + G + '(' + R + '(st))));'; break;
      case 'STORE_VAR': body = SU + '(st,' + G + '(' + R + '(st)),st.s[st.s.length-1]);'; break;
      case 'DECLARE_VAR': body = '{var _dn=' + G + '(' + R + '(st));st.c.set(_dn,st.s.pop());}'; break;
      case 'POP': body = 'st.s.pop();'; break;
      case 'DUP': body = 'st.s.push(st.s[st.s.length-1]);'; break;
      case 'ADD': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l+r);}'; break;
      case 'SUB': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l-r);}'; break;
      case 'MUL': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l*r);}'; break;
      case 'DIV': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l/r);}'; break;
      case 'MOD': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l%r);}'; break;
      case 'EXP': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(Math.pow(l,r));}'; break;
      case 'EQ': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l==r);}'; break;
      case 'NEQ': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l!=r);}'; break;
      case 'STRICT_EQ': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l===r);}'; break;
      case 'STRICT_NEQ': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l!==r);}'; break;
      case 'LT': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l<r);}'; break;
      case 'LTE': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l<=r);}'; break;
      case 'GT': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l>r);}'; break;
      case 'GTE': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l>=r);}'; break;
      case 'AND': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l&&r);}'; break;
      case 'OR': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l||r);}'; break;
      case 'NOT': body = 'st.s.push(!st.s.pop());'; break;
      case 'NULLISH': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l!=null?l:r);}'; break;
      case 'BIT_AND': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l&r);}'; break;
      case 'BIT_OR': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l|r);}'; break;
      case 'BIT_XOR': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l^r);}'; break;
      case 'BIT_NOT': body = 'st.s.push(~st.s.pop());'; break;
      case 'LSHIFT': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l<<r);}'; break;
      case 'RSHIFT': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l>>r);}'; break;
      case 'URSHIFT': body = '{var r=st.s.pop();var l=st.s.pop();st.s.push(l>>>r);}'; break;
      case 'JMP': body = 'st.i=' + R + '(st);'; break;
      case 'JMP_IF_FALSE': body = 'if(!st.s.pop())st.i=' + R + '(st);else st.i+=4;'; break;
      case 'JMP_IF_TRUE': body = 'if(st.s.pop())st.i=' + R + '(st);else st.i+=4;'; break;
      case 'CALL': body = '{var ac=' + R + '(st),a=[];for(var i=0;i<ac;i++)a.unshift(st.s.pop());var f=st.s.pop();if(f&&f._v){var __fd__=f._o||f;var __rp__=' + F + '(__fd__,a,f._s||st.c,undefined,st.t);st.s.push(__fd__.async?__rp__:await __rp__);}else if(typeof f==="function"){st.s.push(f.apply(st.t,a));}else{throw new TypeError("Cannot call "+typeof f);}}'; break;
      case 'CALL_METHOD': body = '{var ac=' + R + '(st),mn=' + G + '(' + R + '(st)),a=[];for(var i=0;i<ac;i++)a.unshift(st.s.pop());var o=st.s.pop();if(o===null||o===undefined){st.s.push(undefined);}else{var m=o[mn];if(m&&m._v){var __fd2__=m._o||m;var __rp2__=' + F + '(__fd2__,a,m._s||st.c,undefined,o);st.s.push(__fd2__.async?__rp2__:await __rp2__);}else if(typeof m==="function"){st.s.push(m.apply(o,a));}else{st.s.push(undefined);}}}'; break;
      case 'NEW': body = '{var ac=' + R + '(st),a=[];for(var i=0;i<ac;i++)a.unshift(st.s.pop());var ctor=st.s.pop();if(ctor&&ctor._v){var inst=Object.create(ctor.prototype);var r=ctor.apply(inst,a);if(r&&typeof r.then==="function")await r;st.s.push(inst);}else if(typeof ctor==="function"){try{var inst=Reflect.construct(ctor,a);st.s.push(inst);}catch(e){var inst=Object.create(ctor.prototype);var r=ctor.apply(inst,a);st.s.push(r&&typeof r==="object"?r:inst);}}else{st.s.push({});}}'; break;
      case 'RETURN': body = '{var rv=st.s.length?st.s.pop():undefined;if(st.y.length>0){var ti=st.y[st.y.length-1];if(ti.finallyAddr>=0){st._retv=rv;st.i=ti.finallyAddr;break;}}while(st.l.length>0){var fr=st.l.pop();st.c=fr.c;st.t=fr.t;}return rv;}'; break;
      case 'TYPEOF': body = '{var v=st.s.pop();st.s.push(v&&v._v?"function":typeof v);}'; break;
      case 'INSTANCEOF': body = '{var c=st.s.pop(),o=st.s.pop();if(c&&c._v)c=c._o;st.s.push(o instanceof c);}'; break;
      case 'IN': body = '{var o=st.s.pop(),p=st.s.pop();st.s.push(p in o);}'; break;
      case 'DELETE': body = '{var p=st.s.pop(),o=st.s.pop();st.s.push(o!=null?delete o[p]:true);}'; break;
      case 'GET_PROP': body = '{var pn=' + G + '(' + R + '(st)),o=st.s.pop();st.s.push(o!=null?o[pn]:undefined);}'; break;
      case 'SET_PROP': body = '{var pn=' + G + '(' + R + '(st)),v=st.s.pop(),o=st.s.pop();if(o!=null)o[pn]=v;st.s.push(v);}'; break;
      case 'GET_INDEX': body = '{var idx=st.s.pop(),o=st.s.pop();st.s.push(o!=null?o[idx]:undefined);}'; break;
      case 'SET_INDEX': body = '{var v=st.s.pop(),idx=st.s.pop(),o=st.s.pop();if(o!=null)o[idx]=v;st.s.push(v);}'; break;
      case 'NEW_OBJ': body = 'st.s.push({});'; break;
      case 'NEW_ARR': body = '{var len=' + R + '(st),a=[];for(var i=0;i<len;i++)a.unshift(st.s.pop());st.s.push(a);}'; break;
      case 'PUSH_FUNC': body = '{var fd=' + G + '(' + R + '(st)),vf=' + W + '(fd,st);st.s.push(vf);}'; break;
      case 'OPTIONAL_CHAIN': body = '{var _ocpn=' + G + '(' + R + '(st));if(st.s[st.s.length-1]==null){st.s.pop();st.s.push(undefined);}else{var _oco=st.s.pop();st.s.push(_oco!=null?_oco[_ocpn]:undefined);}}'; break;
      case 'ENTER_SCOPE': body = '{st.l.push({i:st.i,c:st.c,t:st.t,s:st.s.slice()});var ns=new Map();ns.__p=st.c;st.c=ns;}'; break;
      case 'EXIT_SCOPE': body = '{if(st.l.length>0){var fr=st.l.pop();st.c=fr.c;st.t=fr.t;}}'; break;
      case 'TRY': body = '{var inf=' + G + '(' + R + '(st));st.y.push({catchAddr:inf.catchAddr,finallyAddr:inf.finallyAddr});}'; break;
      case 'THROW': body = '{var err=st.s.pop();if(st.y.length===0)throw err;var ti=st.y[st.y.length-1];if(ti.catchAddr>=0){st.y.pop();st.s.push(err);st.i=ti.catchAddr;}else if(ti.finallyAddr>=0){st._throwing=true;st.s.push(err);st.i=ti.finallyAddr;}else{st.y.pop();throw err;}}'; break;
      case 'CATCH': body = '{}'; break;
      case 'FINALLY': body = '{}'; break;
      case 'END_TRY': body = '{if(st.y.length>0){var _tr=st.y.pop();if(st._throwing){st._throwing=false;var _err=st.s.pop();throw _err;}}if(st._retv!==undefined){var _rv=st._retv;st._retv=undefined;while(st.l.length>0){var fr=st.l.pop();st.c=fr.c;st.t=fr.t;}return _rv;}}'; break;
      case 'INC_PRE': body = '{var n=' + G + '(' + R + '(st)),cur=' + L + '(st,n)||0;' + SU + '(st,n,cur+1);st.s.push(cur+1);}'; break;
      case 'INC_POST': body = '{var n=' + G + '(' + R + '(st)),cur=' + L + '(st,n)||0;st.s.push(cur);' + SU + '(st,n,cur+1);}'; break;
      case 'DEC_PRE': body = '{var n=' + G + '(' + R + '(st)),cur=' + L + '(st,n)||0;' + SU + '(st,n,cur-1);st.s.push(cur-1);}'; break;
      case 'DEC_POST': body = '{var n=' + G + '(' + R + '(st)),cur=' + L + '(st,n)||0;st.s.push(cur);' + SU + '(st,n,cur-1);}'; break;
      case 'NEG': body = 'st.s.push(-st.s.pop());'; break;
      case 'POS': body = 'st.s.push(+st.s.pop());'; break;
      case 'SET_PROP_OBJ': body = '{var pn=' + G + '(' + R + '(st)),v=st.s.pop(),o=st.s[st.s.length-1];if(o!=null)o[pn]=v;}'; break;
      case 'SET_PROP_OBJ_COMPUTED': body = '{var k=st.s.pop(),v=st.s.pop(),o=st.s[st.s.length-1];if(o!=null)o[k]=v;}'; break;
      case 'TERNARY': body = '{var alt=st.s.pop(),cons=st.s.pop(),tst=st.s.pop();st.s.push(tst?cons:alt);}'; break;
      case 'THIS': body = 'st.s.push(st.t);'; break;
      case 'SUPER': body = 'st.s.push(st.t);'; break;
      case 'REST_ARGS': body = '{var a=st.s.pop();if(Array.isArray(a)){for(var i=0;i<a.length;i++)st.s.push(a[i]);}else if(a&&typeof a[Symbol.iterator]==="function"){var it=a[Symbol.iterator]();var nx;while(!(nx=it.next()).done)st.s.push(nx.value);}}'; break;
      case 'ARRAY_PUSH': body = '{var _av=st.s.pop();var _aa=st.s[st.s.length-1];if(Array.isArray(_aa))_aa.push(_av);}'; break;
      case 'ARRAY_SPREAD': body = '{var _sp=st.s.pop();var _arr=st.s[st.s.length-1];if(_sp&&typeof _sp[Symbol.iterator]==="function"){var _it=_sp[Symbol.iterator]();var _nx;while(!(_nx=_it.next()).done)_arr.push(_nx.value);}else if(Array.isArray(_sp)){for(var _si=0;_si<_sp.length;_si++)_arr.push(_sp[_si]);}}'; break;
      case 'OBJ_SPREAD': body = '{var src=st.s.pop(),dst=st.s[st.s.length-1];if(src&&typeof src==="object"){for(var k in src){if(src.hasOwnProperty(k))dst[k]=src[k];}}}'; break;
      case 'FOR_OF_ITER': body = '{var itb=st.s.pop(),it=itb&&itb[Symbol.iterator]?itb[Symbol.iterator]():null;st.s.push(it||{next:function(){return{done:true};}});}'; break;
      case 'FOR_IN_ITER': body = '{var o=st.s.pop(),ks=[];if(o!=null){for(var k in o)ks.push(k);}st.s.push(ks);}'; break;
      case 'AWAIT': body = '{var p=st.s.pop();if(p&&typeof p.then==="function"){st.s.push(await p);}else{st.s.push(p);}}'; break;
      case 'YIELD': body = 'st.s.push(st.s.pop());'; break;
      case 'CLASS_BODY': body = '{var sc=st.s.pop(),cls=st.s[st.s.length-1];if(sc&&cls&&typeof sc==="function"){var pr=Object.create(sc.prototype);pr.constructor=cls;cls.prototype=pr;cls.__s=sc;}}'; break;
      case 'SUPER_CALL': body = '{var ac=' + R + '(st),a=[];for(var i=0;i<ac;i++)a.unshift(st.s.pop());var sC=st.s.pop();if(sC&&sC._v){var __sc_fd__=sC._o||sC;var __sc_r__=' + F + '(__sc_fd__,a,sC._s||st.c,undefined,st.t);if(__sc_fd__.async)await __sc_r__;st.s.push(st.t);}else if(typeof sC===\"function\"){var r=sC.apply(st.t,a);if(r&&typeof r.then===\"function\"){st.s.push(await r);}else{st.s.push(r);}}else{st.s.push(st.t);}}'; break;
      case 'SUPER_METHOD': body = '{var ac=' + R + '(st),mn=' + G + '(' + R + '(st)),a=[];for(var i=0;i<ac;i++)a.unshift(st.s.pop());var sl=st.s.pop();var sp=sl&&sl.constructor&&sl.constructor.__s&&sl.constructor.__s.prototype;var m=sp?sp[mn]:undefined;if(typeof m==="function"){var r=m.apply(sl,a);if(r&&typeof r.then==="function"){st.s.push(await r);}else{st.s.push(r);}}else{st.s.push(undefined);}}'; break;
      case 'IMPORT': body = '{}'; break;
      case 'EXPORT': body = '{}'; break;
      case 'DEAD_CODE': body = R + '(st);'; break;
      case 'ANTI_DEBUG': body = '{var start=Date.now(),j=0;for(var i=0;i<500000;i++)j+=i&1;if(Date.now()-start>50){__B__=new Uint8Array(0);__DC__=[];throw new Error("Anti-debug");}}'; break;
      case 'DEBUG_BREAK': body = 'if(__D__)debugger;'; break;
      case 'SEGMENT_SWITCH': body = '{var segId=__B__[st.i++]%__NUM_SEG__;if(segId!==__OT_CUR__&&segId<__NUM_SEG__){__OT_CUR__=segId;__OT__=__OT_ALL__[segId];}}'; break;
      case 'FAKE_ADD': body = '{var fv=' + R + '(st);st.fakeStack.push(fv);}'; break;
      case 'FAKE_CALL': body = '{' + R + '(st);st.fakeStack.push(Math.random());}'; break;
      case 'DESTRUCTURE_ARR': body = '{var _dc=' + R + '(st);var _arr=st.s.pop();for(var _di=_dc-1;_di>=0;_di--){var _dn=' + SK + '(st);var _dv=_arr!=null?_arr[_di]:undefined;' + 'st.c.set(_dn,_dv);}}'; break;
      case 'DESTRUCTURE_OBJ': body = '{var _dc=' + R + '(st);var _obj=st.s.pop();for(var _di=_dc-1;_di>=0;_di--){var _kn=' + SK + '(st);var _dn=' + SK + '(st);var _dv=_obj!=null?_obj[_kn]:undefined;' + 'st.c.set(_dn,_dv);}}'; break;
      default: body = '{}'; break;
    }
    lines.push('        case ' + gi + ':' + body + ' break;');
  }
  var asyncBody = lines.join('\n');
  var syncBody = asyncBody.replace(/await /g, '');
  return {async: asyncBody, sync: syncBody};
};

export function BuildVM(input: BuildInput): string {
  var template = "(async function() {\n  var __D__ = {{DEBUG_FLAG}};\n  var __E__ = {{BYTECODE}};\n  var __S__ = {{BC_SEED}};\n  var __C__ = {{CONSTANTS}};\n  var __X__ = {{EXTERNAL_APIS}};\n\n  {{DEAD_CODE}}\n\n  var {{VM_VAR_G}} = typeof global !== \"undefined\" ? global : (typeof window !== \"undefined\" ? window : this);\n  var {{VM_FN_ST}} = {{VM_VAR_G}}.setTimeout;\n\n  var __BNC__ = {{BN_CHUNKS}};\n  var __BNK__ = {{BN_KEY}};\n  var __BN__ = [];\n  var __BNI__ = 0;\n  for (var __BNJ__ = 0; __BNJ__ < __BNC__.length; ) {\n    var __BNL__ = __BNC__[__BNJ__++];\n    var __BNS__ = \"\";\n    for (var __BNK2__ = 0; __BNK2__ < __BNL__; __BNK2__++) __BNS__ += String.fromCharCode(__BNC__[__BNJ__++] ^ ((__BNK__ + __BNI__ * 7 + __BNK2__ * 13) & 255));\n    __BN__.push(__BNS__);\n    __BNI__++;\n  }\n\n  var {{VM_VAR_GS}} = new Map();\n  var {{VM_VAR_BI}} = new Map();\n  for (var i = 0; i < __BN__.length; i++) {\n    var n = __BN__[i];\n    if (typeof {{VM_VAR_G}}[n] !== \"undefined\") {\n      var _fn = {{VM_VAR_G}}[n];\n      if (typeof _fn === \"function\") _fn = _fn.bind({{VM_VAR_G}});\n      {{VM_VAR_BI}}.set(n, _fn); {{VM_VAR_GS}}.set(n, _fn);\n    }\n  }\n  var __EK__ = Object.keys(__X__);\n  for (var i = 0; i < __EK__.length; i++) {\n    var k = __EK__[i], v = __X__[k];\n    if (typeof v !== \"undefined\") {\n      if (typeof v === \"function\") v = v.bind({{VM_VAR_G}});\n      {{VM_VAR_BI}}.set(k, v); {{VM_VAR_GS}}.set(k, v);\n    }\n  }\n\n  var {{VM_FN_D}} = function(s, l) {\n    var k = [];\n    for (var i = 0; i < l; i++) {\n      var h = s[i % s.length] ^ ((i * 157 + 63) & 255);\n      for (var j = 0; j < s.length; j++) h = ((h << 3) - h + s[j]) | 0;\n      k.push(h & 255);\n    }\n    return k;\n  };\n\n  var __K__ = {{VM_FN_D}}(__S__, Math.max(__E__.length, 40));\n  var __B__ = new Uint8Array(__E__.length);\n  for (var i = 0; i < __E__.length; i++) __B__[i] = __E__[i] ^ __K__[i % __K__.length];\n\n\n  var __OP__ = {{OP_XOR_KEY}};\n  for (var i = 0; i < __B__.length; i++) __B__[i] ^= __OP__;\n\n  var __DC__ = [];\n  for (var i = 0; i < __C__.length; i++) {\n    var c = __C__[i];\n    if (c && typeof c.l === \"number\" && c.c) {\n      __DC__[i] = { _e: true, _l: c.l, _c: c.c, _i: i };\n    } else if (c && typeof c.a === \"number\") {\n      var fd = { addr: c.a, params: c.p || [], async: c.as || false, isArrow: c.ia || false };\n      if (c.nm) fd.name = c.nm;\n      __DC__[i] = fd;\n    } else {\n      __DC__[i] = c;\n    }\n  }\n\n  function {{VM_FN_GC}}(idx) {\n    var v = __DC__[idx];\n    if (v && v._e) {\n      var s = \"\";\n      var __SK__ = {{STR_XOR_OFFSET}};\n      for (var j = 0; j < v._l; j++) s += String.fromCharCode(v._c[j] ^ ((__SK__ + v._i * 17 + j * 31 + 73) & 255));\n      return s;\n    }\n    if (v && typeof v === \"object\") {\n      if (v.__regex) return new RegExp(v.pattern, v.flags);\n      if (v.__bigint) return BigInt(v.value);\n      if (v.__undef) return undefined;\n      if (v.__null) return null;\n      if (v.__nan) return NaN;\n      if (v.__inf !== undefined) return v.__inf ? Infinity : -Infinity;\n      if (v.__taggedTemplate) { var arr = v.strings.slice(); arr.raw = v.raw; return arr; }\n    }\n    return v;\n  }\n\n  var __OT_ALL__ = {{OPCODE_TABLES}};\n  var __OT_CUR__ = 0;\n  var __OT__ = __OT_ALL__[0];\n  var __NUM_SEG__ = {{NUM_SEGMENTS}};\n  var __SEG_KEYS__ = {{SEGMENT_KEYS}};\n\n  var __V2G__ = {{VARIANT_TO_GROUP}};\n\n  var {{VM_VAR_VM}} = [];\n\n  function {{VM_FN_V}}(pScope) {\n    this.s = []; this.i = 0; this.c = new Map();\n    if (pScope) this.c.__p = pScope;\n    this.l = []; this.t = {{VM_VAR_GS}}; this.y = []; this._retv = undefined; this._throwing = false;\n    this.fakeStack = []; this._sk = 0;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_V}});\n\n  var __SK__ = {{STACK_KEY}};\n  function {{VM_FN_SP}}(st, v) {\n    st.s.push(v);\n  }\n  function {{VM_FN_SK}}(st) {\n    var v = st.s.pop();\n    if (typeof v === \"number\" && !isNaN(v) && isFinite(v)) {\n      st._sk = Math.max(0, (st._sk || 1) - 1);\n      var kb = __SK__[(st._sk || 0) % __SK__.length];\n      if (Number.isInteger(v) && v >= -2147483648 && v <= 2147483647) {\n        return v ^ ((kb << 24) | (kb << 16) | (kb << 8) | kb);\n      } else {\n        return v - kb * 0.000001;\n      }\n    } else if (typeof v === \"string\") {\n      st._sk = Math.max(0, (st._sk || 1) - 1);\n      var kb = __SK__[(st._sk || 0) % __SK__.length];\n      var ds = \"\"; for (var i = 0; i < v.length; i++) ds += String.fromCharCode(v.charCodeAt(i) ^ kb);\n      return ds;\n    }\n    return v;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_SP}}); {{VM_VAR_VM}}.push({{VM_FN_SK}});\n  function {{VM_FN_L}}(st, name) {\n    var s = st.c;\n    while (s) { if (s.has(name)) return s.get(name); s = s.__p; }\n    if ({{VM_VAR_GS}}.has(name)) return {{VM_VAR_GS}}.get(name);\n    if ({{VM_VAR_BI}}.has(name)) return {{VM_VAR_BI}}.get(name);\n    if (typeof {{VM_VAR_G}}[name] !== \"undefined\") return {{VM_VAR_G}}[name];\n    return undefined;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_L}});\n\n  function {{VM_FN_S}}(st, name, value) {\n    var s = st.c;\n    while (s) { if (s.has(name)) { s.set(name, value); return; } s = s.__p; }\n    st.c.set(name, value);\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_S}});\n\n  function {{VM_FN_SU}}(st, name, value) {\n    var s = st.c;\n    while (s) { if (s.has(name)) { s.set(name, value); return; } s = s.__p; }\n    st.c.set(name, value);\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_SU}});\n\n  function {{VM_FN_R}}(st) {\n    var v = (__B__[st.i] << 24) | (__B__[st.i + 1] << 16) | (__B__[st.i + 2] << 8) | __B__[st.i + 3];\n    st.i += 4; return v;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_R}});\n\n  async function {{VM_FN_XE}}(st) {\n    var M = 50000000, steps = 0;\n    while (st.i < __B__.length) {\n      try {\n      if (++steps > M) throw new Error(\"VM:max steps\");\n      var opByte = __B__[st.i++] ^ ((st.i - 1) & 0xFF);\n      var gidx = __V2G__[opByte];\n      if (gidx === undefined) { __B__ = new Uint8Array(0); __DC__ = []; throw new Error(\"Unknown op:\" + opByte); }\n\n      switch (gidx) {\n{{SWITCH_BODY}}\n        default:\n          __B__ = new Uint8Array(0); __DC__ = [];\n          throw new Error(\"Unknown op:\" + opByte);\n      }\n      } catch (__vmErr__) {\n        if (st.y.length === 0) throw __vmErr__;\n        var __ti__ = st.y.pop();\n        st.s.push(__vmErr__);\n        if (__ti__.catchAddr >= 0) { st.i = __ti__.catchAddr; continue; }\n        if (__ti__.finallyAddr >= 0) { st.i = __ti__.finallyAddr; continue; }\n        throw __vmErr__;\n      }\n    }\n    return st.s.length ? st.s[st.s.length - 1] : undefined;\n  }\n  function {{VM_FN_XS}}(st) {\n    var M = 10000000, steps = 0;\n    while (st.i < __B__.length) {\n      try {\n      if (++steps > M) throw new Error(\"VM:max steps\");\n      var opByte = __B__[st.i++] ^ ((st.i - 1) & 0xFF);\n      var gidx = __V2G__[opByte];\n      if (gidx === undefined) { __B__ = new Uint8Array(0); __DC__ = []; throw new Error(\"Unknown op:\" + opByte); }\n\n      switch (gidx) {\n{{SWITCH_BODY_SYNC}}\n        default:\n          __B__ = new Uint8Array(0); __DC__ = [];\n          throw new Error(\"Unknown op:\" + opByte);\n      }\n      } catch (__vmErr__) {\n        if (st.y.length === 0) throw __vmErr__;\n        var __ti__ = st.y.pop();\n        st.s.push(__vmErr__);\n        if (__ti__.catchAddr >= 0) { st.i = __ti__.catchAddr; continue; }\n        if (__ti__.finallyAddr >= 0) { st.i = __ti__.finallyAddr; continue; }\n        throw __vmErr__;\n      }\n    }\n    return st.s.length ? st.s[st.s.length - 1] : undefined;\n  }\n\n  {{VM_VAR_VM}}.push({{VM_FN_XE}});\n  {{VM_VAR_VM}}.push({{VM_FN_XS}});\n\n  function {{VM_FN_W}}(fd, ps) {\n    var cs = ps ? ps.c : {{VM_VAR_GS}};\n    var ct = ps ? ps.t : undefined;\n    var vf = function() {\n      var a = Array.prototype.slice.call(arguments);\n      return {{VM_FN_F}}(fd, a, cs, ct, this);\n    };\n    vf._v = true; vf._o = fd;\n    vf.prototype = fd.prototype || {}; vf._s = cs;\n    return vf;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_W}});\n\n  function {{VM_FN_F}}(fd, a, cs, ct, cl) {\n    var st = new {{VM_FN_V}}(cs || {{VM_VAR_GS}});\n    st._cs = cs || null;\n    var params = fd.params || [];\n    for (var i = 0; i < params.length; i++) {\n      var p = params[i];\n      if (p.charAt(0) === \".\" && p.charAt(1) === \".\" && p.charAt(2) === \".\") {\n        var rest = []; for (var j = i; j < a.length; j++) rest.push(a[j]);\n        st.c.set(p.slice(3), rest); break;\n      } else { st.c.set(p, i < a.length ? a[i] : undefined); }\n    }\n    st.c.set(\"arguments\", a);\n    if (fd._this !== undefined) { st.t = fd._this; }\n    else if (fd.isArrow) { st.t = ct || {{VM_VAR_GS}}; }\n    else { st.t = cl || {{VM_VAR_GS}}; }\n    st.i = fd.addr;\n    if (fd.async) return {{VM_FN_XE}}(st); return {{VM_FN_XS}}(st);\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_F}});\n\n  var eF = { addr: 0, params: [], _scope: {{VM_VAR_GS}} };\n  var __result__ = await {{VM_FN_F}}(eF, [], {{VM_VAR_GS}}, undefined, {{VM_VAR_GS}});\n  await new Promise(function(r) { {{VM_FN_ST}}(r, {{KEEPALIVE_MS}}); });\n  return __result__;\n})();";

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

  var builtinNames = ["Object","Array","String","Number","Boolean","Function","RegExp","Date","Error","Math","JSON","Promise","Map","Set","Symbol","Infinity","NaN","undefined","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","console","setTimeout","clearTimeout","setInterval","clearInterval"];
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
