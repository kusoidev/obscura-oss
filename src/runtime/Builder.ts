import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
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


var generateDispatch = require('./dispatch-gen');

export function BuildVM(input: BuildInput): string {
  var templatePath = path.join(__dirname, 'async-vm-template.js');
  var template = fs.readFileSync(templatePath, 'utf8');

  var opts: ObfuscatorOptions = {
    mangleIdentifiers: true,
    xorEncryptBytecode: true,
    minifyOutput: true,
    ...(input.options || {}),
  };

  var names = GenerateNames();
  var seed = crypto.randomBytes(32);

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
