(async function() {
  var __D__ = {{DEBUG_FLAG}};
  var __E__ = {{BYTECODE}};
  var __S__ = {{BC_SEED}};
  var __C__ = {{CONSTANTS}};
  var __X__ = {{EXTERNAL_APIS}};

  {{DEAD_CODE}}

  var {{VM_VAR_G}} = typeof global !== "undefined" ? global : (typeof window !== "undefined" ? window : this);
  var {{VM_FN_ST}} = {{VM_VAR_G}}.setTimeout;

  var __BNC__ = {{BN_CHUNKS}};
  var __BNK__ = {{BN_KEY}};
  var __BN__ = [];
  var __BNI__ = 0;
  for (var __BNJ__ = 0; __BNJ__ < __BNC__.length; ) {
    var __BNL__ = __BNC__[__BNJ__++];
    var __BNS__ = "";
    for (var __BNK2__ = 0; __BNK2__ < __BNL__; __BNK2__++) __BNS__ += String.fromCharCode(__BNC__[__BNJ__++] ^ ((__BNK__ + __BNI__ * 7 + __BNK2__ * 13) & 255));
    __BN__.push(__BNS__);
    __BNI__++;
  }

  var {{VM_VAR_GS}} = new Map();
  var {{VM_VAR_BI}} = new Map();
  for (var i = 0; i < __BN__.length; i++) {
    var n = __BN__[i];
    if (typeof {{VM_VAR_G}}[n] !== "undefined") { {{VM_VAR_BI}}.set(n, {{VM_VAR_G}}[n]); {{VM_VAR_GS}}.set(n, {{VM_VAR_G}}[n]); }
  }
  var __EK__ = Object.keys(__X__);
  for (var i = 0; i < __EK__.length; i++) {
    var k = __EK__[i], v = __X__[k];
    if (typeof v !== "undefined") { {{VM_VAR_BI}}.set(k, v); {{VM_VAR_GS}}.set(k, v); }
  }

  var {{VM_FN_D}} = function(s, l) {
    var k = [];
    for (var i = 0; i < l; i++) {
      var h = s[i % s.length] ^ ((i * 157 + 63) & 255);
      for (var j = 0; j < s.length; j++) h = ((h << 3) - h + s[j]) | 0;
      k.push(h & 255);
    }
    return k;
  };

  var __K__ = {{VM_FN_D}}(__S__, Math.max(__E__.length, 40));
  var __B__ = new Uint8Array(__E__.length);
  for (var i = 0; i < __E__.length; i++) __B__[i] = __E__[i] ^ __K__[i % __K__.length];


  var __OP__ = {{OP_XOR_KEY}};
  for (var i = 0; i < __B__.length; i++) __B__[i] ^= __OP__;

  var __DC__ = [];
  for (var i = 0; i < __C__.length; i++) {
    var c = __C__[i];
    if (c && typeof c.l === "number" && c.c) {
      __DC__[i] = { _e: true, _l: c.l, _c: c.c, _i: i };
    } else if (c && typeof c.a === "number") {
      var fd = { addr: c.a, params: c.p || [], async: c.as || false, isArrow: c.ia || false };
      if (c.nm) fd.name = c.nm;
      __DC__[i] = fd;
    } else {
      __DC__[i] = c;
    }
  }

  function {{VM_FN_GC}}(idx) {
    var v = __DC__[idx];
    if (v && v._e) {
      var s = "";
      var __SK__ = {{STR_XOR_OFFSET}};
      for (var j = 0; j < v._l; j++) s += String.fromCharCode(v._c[j] ^ ((__SK__ + v._i * 17 + j * 31 + 73) & 255));
      return s;
    }
    if (v && typeof v === "object") {
      if (v.__regex) return new RegExp(v.pattern, v.flags);
      if (v.__bigint) return BigInt(v.value);
      if (v.__undef) return undefined;
      if (v.__null) return null;
      if (v.__nan) return NaN;
      if (v.__inf !== undefined) return v.__inf ? Infinity : -Infinity;
      if (v.__taggedTemplate) { var arr = v.strings.slice(); arr.raw = v.raw; return arr; }
    }
    return v;
  }

  var __OT_ALL__ = {{OPCODE_TABLES}};
  var __OT_CUR__ = 0;
  var __OT__ = __OT_ALL__[0];
  var __NUM_SEG__ = {{NUM_SEGMENTS}};
  var __SEG_KEYS__ = {{SEGMENT_KEYS}};

  var __V2G__ = {{VARIANT_TO_GROUP}};

  var {{VM_VAR_VM}} = [];

  function {{VM_FN_V}}(pScope) {
    this.s = []; this.i = 0; this.c = new Map();
    if (pScope) this.c.__p = pScope;
    this.l = []; this.t = {{VM_VAR_GS}}; this.y = []; this._retv = undefined; this._throwing = false;
    this.fakeStack = []; this._sk = 0;
  }
  {{VM_VAR_VM}}.push({{VM_FN_V}});

  var __SK__ = {{STACK_KEY}};
  function {{VM_FN_SP}}(st, v) {
    st.s.push(v);
  }
  function {{VM_FN_SK}}(st) {
    var v = st.s.pop();
    if (typeof v === "number" && !isNaN(v) && isFinite(v)) {
      st._sk = Math.max(0, (st._sk || 1) - 1);
      var kb = __SK__[(st._sk || 0) % __SK__.length];
      if (Number.isInteger(v) && v >= -2147483648 && v <= 2147483647) {
        return v ^ ((kb << 24) | (kb << 16) | (kb << 8) | kb);
      } else {
        return v - kb * 0.000001;
      }
    } else if (typeof v === "string") {
      st._sk = Math.max(0, (st._sk || 1) - 1);
      var kb = __SK__[(st._sk || 0) % __SK__.length];
      var ds = ""; for (var i = 0; i < v.length; i++) ds += String.fromCharCode(v.charCodeAt(i) ^ kb);
      return ds;
    }
    return v;
  }
  {{VM_VAR_VM}}.push({{VM_FN_SP}}); {{VM_VAR_VM}}.push({{VM_FN_SK}});
  function {{VM_FN_L}}(st, name) {
    var s = st.c;
    while (s) { if (s.has(name)) return s.get(name); s = s.__p; }
    if ({{VM_VAR_GS}}.has(name)) return {{VM_VAR_GS}}.get(name);
    if ({{VM_VAR_BI}}.has(name)) return {{VM_VAR_BI}}.get(name);
    if (typeof {{VM_VAR_G}}[name] !== "undefined") return {{VM_VAR_G}}[name];
    return undefined;
  }
  {{VM_VAR_VM}}.push({{VM_FN_L}});

  function {{VM_FN_S}}(st, name, value) {
    var s = st.c;
    while (s) { if (s.has(name)) { s.set(name, value); return; } s = s.__p; }
    st.c.set(name, value);
  }
  {{VM_VAR_VM}}.push({{VM_FN_S}});

  function {{VM_FN_SU}}(st, name, value) {
    var s = st.c;
    while (s) { if (s.has(name)) { s.set(name, value); return; } s = s.__p; }
    st.c.set(name, value);
  }
  {{VM_VAR_VM}}.push({{VM_FN_SU}});

  function {{VM_FN_R}}(st) {
    var v = (__B__[st.i] << 24) | (__B__[st.i + 1] << 16) | (__B__[st.i + 2] << 8) | __B__[st.i + 3];
    st.i += 4; return v;
  }
  {{VM_VAR_VM}}.push({{VM_FN_R}});

  async function {{VM_FN_XE}}(st) {
    var M = 50000000, steps = 0;
    while (st.i < __B__.length) {
      try {
      if (++steps > M) throw new Error("VM:max steps");
      var opByte = __B__[st.i++] ^ ((st.i - 1) & 0xFF);
      var gidx = __V2G__[opByte];
      if (gidx === undefined) { __B__ = new Uint8Array(0); __DC__ = []; throw new Error("Unknown op:" + opByte); }

      switch (gidx) {
{{SWITCH_BODY}}
        default:
          __B__ = new Uint8Array(0); __DC__ = [];
          throw new Error("Unknown op:" + opByte);
      }
      } catch (__vmErr__) {
        if (st.y.length === 0) throw __vmErr__;
        var __ti__ = st.y.pop();
        st.s.push(__vmErr__);
        if (__ti__.catchAddr >= 0) { st.i = __ti__.catchAddr; continue; }
        if (__ti__.finallyAddr >= 0) { st.i = __ti__.finallyAddr; continue; }
        throw __vmErr__;
      }
    }
    return st.s.length ? st.s[st.s.length - 1] : undefined;
  }
  function {{VM_FN_XS}}(st) {
    var M = 10000000, steps = 0;
    while (st.i < __B__.length) {
      try {
      if (++steps > M) throw new Error("VM:max steps");
      var opByte = __B__[st.i++] ^ ((st.i - 1) & 0xFF);
      var gidx = __V2G__[opByte];
      if (gidx === undefined) { __B__ = new Uint8Array(0); __DC__ = []; throw new Error("Unknown op:" + opByte); }

      switch (gidx) {
{{SWITCH_BODY_SYNC}}
        default:
          __B__ = new Uint8Array(0); __DC__ = [];
          throw new Error("Unknown op:" + opByte);
      }
      } catch (__vmErr__) {
        if (st.y.length === 0) throw __vmErr__;
        var __ti__ = st.y.pop();
        st.s.push(__vmErr__);
        if (__ti__.catchAddr >= 0) { st.i = __ti__.catchAddr; continue; }
        if (__ti__.finallyAddr >= 0) { st.i = __ti__.finallyAddr; continue; }
        throw __vmErr__;
      }
    }
    return st.s.length ? st.s[st.s.length - 1] : undefined;
  }

  {{VM_VAR_VM}}.push({{VM_FN_XE}});
  {{VM_VAR_VM}}.push({{VM_FN_XS}});

  function {{VM_FN_W}}(fd, ps) {
    var cs = ps ? ps.c : {{VM_VAR_GS}};
    var ct = ps ? ps.t : undefined;
    var vf = function() {
      var a = Array.prototype.slice.call(arguments);
      return {{VM_FN_F}}(fd, a, cs, ct, this);
    };
    vf._v = true; vf._o = fd;
    vf.prototype = fd.prototype || {}; vf._s = cs;
    return vf;
  }
  {{VM_VAR_VM}}.push({{VM_FN_W}});

  function {{VM_FN_F}}(fd, a, cs, ct, cl) {
    var st = new {{VM_FN_V}}(cs || {{VM_VAR_GS}});
    st._cs = cs || null;
    var params = fd.params || [];
    for (var i = 0; i < params.length; i++) {
      var p = params[i];
      if (p.charAt(0) === "." && p.charAt(1) === "." && p.charAt(2) === ".") {
        var rest = []; for (var j = i; j < a.length; j++) rest.push(a[j]);
        st.c.set(p.slice(3), rest); break;
      } else { st.c.set(p, i < a.length ? a[i] : undefined); }
    }
    st.c.set("arguments", a);
    if (fd._this !== undefined) { st.t = fd._this; }
    else if (fd.isArrow) { st.t = ct || {{VM_VAR_GS}}; }
    else { st.t = cl || {{VM_VAR_GS}}; }
    st.i = fd.addr;
    if (fd.async) return {{VM_FN_XE}}(st); return {{VM_FN_XS}}(st);
  }
  {{VM_VAR_VM}}.push({{VM_FN_F}});

  var eF = { addr: 0, params: [], _scope: {{VM_VAR_GS}} };
  var __result__ = await {{VM_FN_F}}(eF, [], {{VM_VAR_GS}}, undefined, {{VM_VAR_GS}});
  await new Promise(function(r) { {{VM_FN_ST}}(r, {{KEEPALIVE_MS}}); });
  return __result__;
})();