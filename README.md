# Obscura — JS Bytecode Obfuscator

Compiles JavaScript into a custom bytecode format executed inside a lightweight virtual machine at runtime. Built from the ground up with native async/await support — no generator transpilation, no state machines, no polyfills.

---

## Why a bytecode VM

String encoding and identifier mangling are useful but shallow. Anyone who can read the decoder function can recover the original strings in minutes. A bytecode VM changes the game — your logic isn't encoded, it's compiled. The original source structure is gone. What ships is an interpreter and a blob of encrypted instructions that only that interpreter understands.

Most JS VM obfuscators break on `async`/`await` because they transpile everything to generators. Obscura doesn't. It has a real async execution path that suspends on `AWAIT` and resumes when the Promise resolves. This means `Promise.all`, `.then()` chains, `try/catch` around async calls — all work correctly.

---

## What it does

1. Parses your JavaScript into an AST
2. Renames every local identifier to a random string
3. Compiles the AST into a custom bytecode instruction set
4. Encrypts the bytecode with a per-build XOR key
5. Embeds everything into a self-contained async IIFE that ships a minimal VM

At runtime, the VM decrypts the bytecode, walks the instruction stream, and executes it. The original variable names, control flow structure, and logical grouping are gone.

---

## What works

Classes with inheritance, closures, destructuring, rest/spread, default parameters, template literals, try/catch/finally, switch, loops, Map/Set, Symbol, JSON, regex — all tested.

What doesn't: generator functions (`function*`), tagged template literals, and deep recursion beyond roughly 1000 frames. These are VM stack limits, not design oversights.

---

## Quick start

```bash
git clone https://github.com/kusoidev/obscura-oss
cd obscura-oss
npm install
npm run build
npm run web
```

Open `http://localhost:3000` — paste code, toggle options, hit Obfuscate.

---

## CLI

```bash
node dist/cli.js input.js -o output.js [--no-mangle] [--no-xor] [--no-minify]
```

---

## API

```ts
import { ObfuscateSource } from './dist/core';

const result = ObfuscateSource(source, {
  mangleIdentifiers: true,
  xorEncryptBytecode: true,
  minifyOutput: true,
});

console.log(result.code);
// result.stats: { sourceSize, bytecodeSize, constantCount, outputSize, warnings }
```

---

## What you're getting

This is the open source release of Obscura. It includes the core bytecode VM, identifier mangling, XOR encryption, and minification. You can use it freely for personal projects, open source work, and learning.

It does not include the full protection suite. The complete version — with polymorphic opcodes, second-layer encryption, constant scrambling, integrity hashing, dead code injection, anti-debug traps, stack encoding, opaque predicates, and junk expressions — is available under a paid license.

If you're an individual developer or using this for non-commercial purposes, everything here is free. If you're a business or company using Obscura in a commercial product, you need a commercial license.

---

## Stability

This project is the result of months of solo development. The core pipeline — classes, async/await, closures, destructuring, and most common patterns — is well-tested and reliable. But JavaScript is a massive language, and there are edge cases I haven't encountered yet. If the obfuscated output doesn't behave the same as your original code, open an issue on GitHub with a minimal reproduction. I'll fix it.

---

## License

This software is released under a dual license:

- **Free for individuals and non-commercial use.** You may use, modify, and distribute this software for personal projects, education, research, and open source work at no cost.

- **Commercial use requires a paid license.** If you are a business, company, or any entity generating revenue that uses this software in a product or service, you must purchase a commercial license. Contact the author for pricing and terms.

- **No resale.** You may not sell this software, fork it with modifications and sell the result, or otherwise commercialize the source code itself. The obfuscation output you produce with it is yours — the engine is not.

Purchasing a commercial license also grants access to the full protection suite (vm-obfuscator-v3) with all advanced obfuscation passes unlocked.