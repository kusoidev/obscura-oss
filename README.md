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
3. Injects junk expressions to bloat the AST and confuse static analysis
4. Compiles the AST into a custom bytecode instruction set
5. Encrypts the bytecode with a per-build XOR key
6. Embeds everything into a self-contained async IIFE that ships a minimal VM

At runtime, the VM decrypts the bytecode, walks the instruction stream, and executes it. The original variable names, control flow structure, and logical grouping are gone.

---

## What works

Classes with inheritance, closures, destructuring, rest/spread, default parameters, template literals, try/catch/finally, switch, loops, Map/Set, Symbol, JSON, regex — all tested.

**What doesn't:**

| Feature | Why |
|---------|-----|
| Generators (`function*`, `async*`) | State machine compilation not implemented — obfuscation refused |
| Tagged template literals | Tag function receives raw strings at runtime, can't be pre-compiled |
| `eval` / `new Function` at runtime | Generated code executes in VM scope, not intended scope |
| Deep recursion (>1000 frames) | JS engine stack limit — fixed in Pro via trampoline dispatch |
| `import`/`export` | Compiled as no-op — obfuscator processes single files |
| `extends Error`/`Array` | Native constructors use internal slots unreachable through VM wrappers |
| `Function.name` / `.length` | Preserved on wrappers — mangled names and param counts carry through |

Everything else — classes, inheritance, closures, destructuring, rest/spread, default parameters, template literals, try/catch/finally, switch, loops, Map/Set, Symbol, JSON, regex, nullish coalescing, optional chaining, async/await — is fully supported and tested.

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

**Try it online:** [kusoidev.github.io/obscura-oss](https://kusoidev.github.io/obscura-oss)

---

## CLI

```bash
node dist/cli.js input.js -o output.js [--no-mangle] [--no-xor] [--no-minify]
```

If you need a function to stay out of the VM and run as plain JavaScript, mark it with a `// @no-vm` comment on the line directly above it:

```js
// @no-vm
function doSomething() {
  // this runs as normal JS, not inside the VM
}
```

The excluded function is embedded directly in the VM's scope and registered in the runtime lookup table. It runs as native JavaScript with full access to outer-scope variables — no `globalThis` pollution, no closure breakage.

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

This is the open source release of Obscura. It includes the core bytecode VM, identifier mangling, junk expression injection, XOR encryption, minification, and debug mode. You can use it freely for personal projects, open source work, and learning.

It does not include the full protection suite. The complete version — with polymorphic opcodes, second-layer encryption, constant scrambling, integrity hashing, dead code injection, anti-debug traps, stack encoding, and opaque predicates — is available under a paid license.

If you're an individual developer or using this for non-commercial purposes, everything here is free. If you're a business or company using Obscura in a commercial product, you need a commercial license.

---

## Stability

This project is the result of months of solo development. The core pipeline — classes, async/await, closures, destructuring, and most common patterns — is well-tested and reliable. But JavaScript is a massive language, and there are edge cases I haven't encountered yet. If the obfuscated output doesn't behave the same as your original code, open an issue on GitHub with a minimal reproduction. I'll fix it.

---

## Limitations

Be realistic about what obfuscation can and can't do. A determined reverser with enough time will figure out any protected code. The goal is to raise the cost — make automated tooling unreliable, force manual analysis, and ensure no two builds look the same. If your threat model involves nation-state actors, you need a different approach entirely.

---

## License

This software is released under a dual license:

- **Free for individuals and non-commercial use.** You may use, modify, and distribute this software for personal projects, education, research, and open source work at no cost.

- **Paid license required for commercial use.** Anyone — individual or business — using this software in a revenue-generating product or service must purchase a license. Contact the author for pricing.

- **No resale.** You may not sell this software, fork it with modifications and sell the result, or otherwise commercialize the source code itself. The obfuscated output you produce with it is yours — the engine is not.

Purchasing a license also gets you **Obscura Pro**, which adds the full protection suite on top of everything in this open source release:

- **Polymorphic opcode tables** — multiple variant byte mappings per segment, different every build
- **Second XOR layer** — double encryption with independent derived keys
- **Constant scrambling** — per-string XOR encryption with per-index keys
- **Integrity hash verification** — runtime tamper detection that wipes bytecode on mismatch
- **Dead code injection** — fake control flow blocks interwoven into the VM wrapper
- **Anti-debug traps** — debugger detection and timing checks
- **Stack encoding** — XOR-encoded VM stack values to complicate memory inspection
- **Opaque predicates** — dead conditional branches interwoven with real code