export interface FuncData {
  addr: number;
  params: string[];
  name: string | null;
  async: boolean;
  isArrow?: boolean;
}

export interface TryInfo {
  catchAddr: number;
  finallyAddr: number;
}

export interface LoopFrame {
  breakLabel: string | null;
  continueLabel: string | null;
}

export interface CompileResult {
  bytecode: number[];
  constants: any[];
  externalAPIs: Set<string>;
  warnings: string[];
}

export interface PatchEntry {
  addr: number;
  label: string;
}