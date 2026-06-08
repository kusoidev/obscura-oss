export interface ObfuscatorOptions {
  mangleIdentifiers: boolean;
  xorEncryptBytecode: boolean;
  minifyOutput: boolean;
}

export function defaultOptions(): ObfuscatorOptions {
  return {
    mangleIdentifiers: true,
    xorEncryptBytecode: true,
    minifyOutput: true,
  };
}

export function lightOptions(): ObfuscatorOptions {
  return {
    mangleIdentifiers: true,
    xorEncryptBytecode: false,
    minifyOutput: false,
  };
}

export const OPTION_LABELS: Record<keyof ObfuscatorOptions, string> = {
  mangleIdentifiers: 'Identifier Mangling',
  xorEncryptBytecode: 'XOR Bytecode Encryption',
  minifyOutput: 'Minify Output',
};

export const OPTION_DESCRIPTIONS: Record<keyof ObfuscatorOptions, string> = {
  mangleIdentifiers: 'Rename all variables to random strings. Preserves property names.',
  xorEncryptBytecode: 'Encrypt the bytecode array with a derived XOR key before embedding.',
  minifyOutput: 'Strip whitespace and comments from the final output.',
};