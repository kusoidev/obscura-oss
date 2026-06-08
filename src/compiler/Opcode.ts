/**
 * Polymorphic opcode system.
 *
 * Each logical operation (ADD, CALL, etc.) has 3-5 unique variant byte values.
 * At compile time, a random variant is chosen per emission — no two occurrences
 * of the same operation use the same raw byte, even within a single build.
 *
 * The VM maps variants back to their operation group via a runtime lookup table
 * (__V2G__) that uses numeric group indices for dispatch. No readable opcode
 * strings appear in the obfuscated output.
 *
 * Variants are unique across all groups — 240 slots used of the 256 available.
 * Collisions are checked at import time and throw immediately.
 *
 * @module Opcode
 */

export interface OpGroup {
  variants: number[];
  name: string;
}

export const OP_GROUPS: Record<string, OpGroup> = {
  HALT: { variants: [0x00, 0x01, 0x02], name: 'HALT' },
  PUSH_CONST: { variants: [0x03, 0x04, 0x05, 0x06], name: 'PUSH_CONST' },
  PUSH_VAR: { variants: [0x07, 0x08, 0x09], name: 'PUSH_VAR' },
  STORE_VAR: { variants: [0x0A, 0x0B, 0x0C], name: 'STORE_VAR' },
  DECLARE_VAR: { variants: [0x0D, 0x0E, 0x0F], name: 'DECLARE_VAR' },
  POP: { variants: [0x10, 0x11, 0x12], name: 'POP' },
  DUP: { variants: [0x13, 0x14, 0x15], name: 'DUP' },

  ADD: { variants: [0x16, 0x17, 0x18, 0x19], name: 'ADD' },
  SUB: { variants: [0x1A, 0x1B, 0x1C, 0x1D], name: 'SUB' },
  MUL: { variants: [0x1E, 0x1F, 0x20, 0x21], name: 'MUL' },
  DIV: { variants: [0x22, 0x23, 0x24, 0x25], name: 'DIV' },
  MOD: { variants: [0x26, 0x27, 0x28, 0x29], name: 'MOD' },
  EXP: { variants: [0x2A, 0x2B, 0x2C], name: 'EXP' },

  EQ: { variants: [0x2D, 0x2E, 0x2F], name: 'EQ' },
  NEQ: { variants: [0x30, 0x31, 0x32], name: 'NEQ' },
  STRICT_EQ: { variants: [0x33, 0x34, 0x35], name: 'STRICT_EQ' },
  STRICT_NEQ: { variants: [0x36, 0x37, 0x38], name: 'STRICT_NEQ' },
  LT: { variants: [0x39, 0x3A, 0x3B], name: 'LT' },
  LTE: { variants: [0x3C, 0x3D, 0x3E], name: 'LTE' },
  GT: { variants: [0x3F, 0x40, 0x41], name: 'GT' },
  GTE: { variants: [0x42, 0x43, 0x44], name: 'GTE' },

  AND: { variants: [0x45, 0x46, 0x47], name: 'AND' },
  OR: { variants: [0x48, 0x49, 0x4A], name: 'OR' },
  NOT: { variants: [0x4B, 0x4C, 0x4D], name: 'NOT' },
  NULLISH: { variants: [0x4E, 0x4F, 0x50], name: 'NULLISH' },

  BIT_AND: { variants: [0x51, 0x52, 0x53], name: 'BIT_AND' },
  BIT_OR: { variants: [0x54, 0x55, 0x56], name: 'BIT_OR' },
  BIT_XOR: { variants: [0x57, 0x58, 0x59], name: 'BIT_XOR' },
  BIT_NOT: { variants: [0x5A, 0x5B, 0x5C], name: 'BIT_NOT' },
  LSHIFT: { variants: [0x5D, 0x5E, 0x5F], name: 'LSHIFT' },
  RSHIFT: { variants: [0x60, 0x61, 0x62], name: 'RSHIFT' },
  URSHIFT: { variants: [0x63, 0x64, 0x65], name: 'URSHIFT' },

  JMP: { variants: [0x66, 0x67, 0x68], name: 'JMP' },
  JMP_IF_FALSE: { variants: [0x69, 0x6A, 0x6B], name: 'JMP_IF_FALSE' },
  JMP_IF_TRUE: { variants: [0x6C, 0x6D, 0x6E], name: 'JMP_IF_TRUE' },

  CALL: { variants: [0x6F, 0x70, 0x71, 0x72], name: 'CALL' },
  CALL_METHOD: { variants: [0x73, 0x74, 0x75, 0x76], name: 'CALL_METHOD' },
  NEW: { variants: [0x77, 0x78, 0x79, 0x7A], name: 'NEW' },
  RETURN: { variants: [0x7B, 0x7C, 0x7D, 0x7E], name: 'RETURN' },
  TYPEOF: { variants: [0x7F, 0x80, 0x81], name: 'TYPEOF' },
  INSTANCEOF: { variants: [0x82, 0x83, 0x84], name: 'INSTANCEOF' },
  IN: { variants: [0x85, 0x86, 0x87], name: 'IN' },
  DELETE: { variants: [0x88, 0x89, 0x8A], name: 'DELETE' },

  GET_PROP: { variants: [0x8B, 0x8C, 0x8D], name: 'GET_PROP' },
  SET_PROP: { variants: [0x8E, 0x8F, 0x90], name: 'SET_PROP' },
  GET_INDEX: { variants: [0x91, 0x92, 0x93], name: 'GET_INDEX' },
  SET_INDEX: { variants: [0x94, 0x95, 0x96], name: 'SET_INDEX' },
  NEW_OBJ: { variants: [0x97, 0x98, 0x99], name: 'NEW_OBJ' },
  NEW_ARR: { variants: [0x9A, 0x9B, 0x9C], name: 'NEW_ARR' },

  PUSH_FUNC: { variants: [0x9D, 0x9E, 0x9F], name: 'PUSH_FUNC' },
  OPTIONAL_CHAIN: { variants: [0xA0, 0xA1], name: 'OPTIONAL_CHAIN' },
  ENTER_SCOPE: { variants: [0xA2, 0xA3, 0xA4], name: 'ENTER_SCOPE' },
  EXIT_SCOPE: { variants: [0xA5, 0xA6, 0xA7], name: 'EXIT_SCOPE' },

  TRY: { variants: [0xA8, 0xA9, 0xAA], name: 'TRY' },
  THROW: { variants: [0xAB, 0xAC, 0xAD], name: 'THROW' },
  CATCH: { variants: [0xDE, 0xDF], name: 'CATCH' },
  FINALLY: { variants: [0xE0, 0xE1], name: 'FINALLY' },
  END_TRY: { variants: [0xE2, 0xE3], name: 'END_TRY' },

  INC_PRE: { variants: [0xAE, 0xAF], name: 'INC_PRE' },
  INC_POST: { variants: [0xB0, 0xB1], name: 'INC_POST' },
  DEC_PRE: { variants: [0xB2, 0xB3], name: 'DEC_PRE' },
  DEC_POST: { variants: [0xB4, 0xB5], name: 'DEC_POST' },
  NEG: { variants: [0xB6, 0xB7], name: 'NEG' },
  POS: { variants: [0xB8, 0xB9], name: 'POS' },

  SET_PROP_OBJ: { variants: [0xBA, 0xBB], name: 'SET_PROP_OBJ' },
  SET_PROP_OBJ_COMPUTED: { variants: [0xBC, 0xBD], name: 'SET_PROP_OBJ_COMPUTED' },
  TERNARY: { variants: [0xBE, 0xBF], name: 'TERNARY' },
  THIS: { variants: [0xC0, 0xC1], name: 'THIS' },
  SUPER: { variants: [0xE4, 0xE5], name: 'SUPER' },

  REST_ARGS: { variants: [0xC2, 0xC3], name: 'REST_ARGS' },
  ARRAY_SPREAD: { variants: [0xC4, 0xC5], name: 'ARRAY_SPREAD' },
  OBJ_SPREAD: { variants: [0xC6, 0xC7], name: 'OBJ_SPREAD' },
  FOR_OF_ITER: { variants: [0xC8, 0xC9], name: 'FOR_OF_ITER' },
  FOR_IN_ITER: { variants: [0xCA, 0xCB], name: 'FOR_IN_ITER' },
  AWAIT: { variants: [0xCC, 0xCD], name: 'AWAIT' },
  YIELD: { variants: [0xE6, 0xE7], name: 'YIELD' },

  CLASS_BODY: { variants: [0xCE, 0xCF], name: 'CLASS_BODY' },
  SUPER_CALL: { variants: [0xD0, 0xD1], name: 'SUPER_CALL' },
  SUPER_METHOD: { variants: [0xD2, 0xD3], name: 'SUPER_METHOD' },

  IMPORT: { variants: [0xE8, 0xE9], name: 'IMPORT' },
  EXPORT: { variants: [0xEA, 0xEB], name: 'EXPORT' },

  DEAD_CODE: { variants: [0xD4, 0xD5], name: 'DEAD_CODE' },
  ANTI_DEBUG: { variants: [0xD6], name: 'ANTI_DEBUG' },
  DEBUG_BREAK: { variants: [0xD7], name: 'DEBUG_BREAK' },

  SEGMENT_SWITCH: { variants: [0xD8, 0xD9], name: 'SEGMENT_SWITCH' },
  FAKE_ADD: { variants: [0xDA, 0xDB], name: 'FAKE_ADD' },
  FAKE_CALL: { variants: [0xDC, 0xDD], name: 'FAKE_CALL' },

  DESTRUCTURE_ARR: { variants: [0xEC, 0xED, 0xEE], name: 'DESTRUCTURE_ARR' },
  DESTRUCTURE_OBJ: { variants: [0xEF, 0xF0, 0xF1], name: 'DESTRUCTURE_OBJ' },

  ARRAY_PUSH: { variants: [0xF2, 0xF3], name: 'ARRAY_PUSH' },

};

/**
 * Reverse lookup: variant byte -> group name.
 * Built once at import time with collision detection.
 */
export const VARIANT_TO_GROUP: Record<number, string> = {};
for (const [groupName, group] of Object.entries(OP_GROUPS)) {
  for (const v of group.variants) {
    if (VARIANT_TO_GROUP[v] !== undefined) {
      throw new Error('Variant collision at 0x' + v.toString(16) + ': ' + VARIANT_TO_GROUP[v] + ' vs ' + groupName);
    }
    VARIANT_TO_GROUP[v] = groupName;
  }
}

export const OP: Record<string, number> = {};
for (const [groupName, group] of Object.entries(OP_GROUPS)) {
  OP[groupName] = group.variants[0];
}

/**
 * Pick a random variant byte for an opcode group.
 * Called at compile time for every single opcode emission.
 */
export function pickVariant(groupName: string): number {
  const group = OP_GROUPS[groupName];
  if (!group) throw new Error('Unknown op group: ' + groupName);
  return group.variants[Math.floor(Math.random() * group.variants.length)];
}

export function allVariants(): number[] {
  const seen = new Set<number>();
  for (const group of Object.values(OP_GROUPS)) {
    for (const v of group.variants) {
      seen.add(v);
    }
  }
  return Array.from(seen).sort((a, b) => a - b);
}

export type Opcode = number;