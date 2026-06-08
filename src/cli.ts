import * as fs from 'fs';
import { ObfuscateSource } from './core';

function printHelp() {
  console.log('Obscura - JS Obfuscation Engine');
  console.log('');
  console.log('Usage: node dist/cli.js <input.js> [options]');
  console.log('');
  console.log('Options:');
  console.log('  -o, --output <file>    Output file (default: stdout)');
  console.log('  --no-mangle            Disable identifier mangling');
  console.log('  --no-xor               Disable XOR encryption');
  console.log('  --no-minify            Disable output minification');
  console.log('  -h, --help             Show this help');
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    printHelp();
    process.exit(0);
  }

  const inputFile = args[0];
  if (!fs.existsSync(inputFile)) {
    console.error('File not found:', inputFile);
    process.exit(1);
  }

  let outputFile = '';
  const options: any = { mangleIdentifiers: true, xorEncryptBytecode: true, minifyOutput: true };

  for (let i = 1; i < args.length; i++) {
    if ((args[i] === '-o' || args[i] === '--output') && args[i + 1]) {
      outputFile = args[++i];
    } else if (args[i] === '--no-mangle') {
      options.mangleIdentifiers = false;
    } else if (args[i] === '--no-xor') {
      options.xorEncryptBytecode = false;
    } else if (args[i] === '--no-minify') {
      options.minifyOutput = false;
    }
  }

  const source = fs.readFileSync(inputFile, 'utf8');
  const result = ObfuscateSource(source, options);

  if (outputFile) {
    fs.writeFileSync(outputFile, result.code, 'utf8');
    console.error('Written to', outputFile);
  } else {
    process.stdout.write(result.code);
  }
}

main();
