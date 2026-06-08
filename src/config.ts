export interface ObfuscatorOptions {
  mangleIdentifiers: boolean;
  injectJunkExpressions: boolean;
  xorEncryptBytecode: boolean;
  minifyOutput: boolean;
  debugMode: boolean;
}

export function defaultOptions(): ObfuscatorOptions {
  return {
    mangleIdentifiers: true,
    injectJunkExpressions: true,
    xorEncryptBytecode: true,
    minifyOutput: true,
    debugMode: false,
  };
}

export function lightOptions(): ObfuscatorOptions {
  return {
    mangleIdentifiers: true,
    injectJunkExpressions: false,
    xorEncryptBytecode: false,
    minifyOutput: false,
    debugMode: false,
  };
}

export const OPTION_LABELS: Record<keyof ObfuscatorOptions, string> = {
  mangleIdentifiers: 'Identifier Mangling',
  injectJunkExpressions: 'Junk Expressions',
  xorEncryptBytecode: 'XOR Bytecode Encryption',
  minifyOutput: 'Minify Output',
  debugMode: 'Debug Mode',
};

export const OPTION_DESCRIPTIONS: Record<keyof ObfuscatorOptions, string> = {
  mangleIdentifiers: 'Rename all variables to random strings. Preserves property names.',
  injectJunkExpressions: 'Scatter random variable assignments throughout the code.',
  xorEncryptBytecode: 'Encrypt the bytecode array with a derived XOR key before embedding.',
  minifyOutput: 'Strip whitespace and comments from the final output.',
  debugMode: 'Emit human-readable VM state to the console. Huge output, only for development.',
};