# Obscura — Developer Documentation

## Architecture overview

Obscura compiles JavaScript into a custom bytecode format and ships a lightweight virtual machine that executes it at runtime. The pipeline has three stages:

```
Source JS  -->  AST  -->  Bytecode  -->  Obfuscated Output
              (acorn)    (compiler)     (Builder + VM template)
```

### Stage 1: Parse & Pre-obfuscate
`src/compiler/PreObfuscator.ts` walks the AST and renames every local identifier to a random string. It scopes correctly — function parameters, block-scoped variables, and class names all get unique mangles. Reserved words and built-in globals are preserved.

### Stage 2: Bytecode compilation
`src/compiler/BytecodeCompiler.ts` walks the mangled AST and emits a linear bytecode stream. Each logical operation (ADD, CALL, GET_PROP, etc.) maps to a polymorphic opcode byte chosen randomly at compile time. Operands are 32-bit little-endian integers.

### Stage 3: VM packaging
`src/runtime/Builder.ts` takes the bytecode array and constant pool, encrypts them with a per-build XOR key, and embeds everything into a self-executing async IIFE that contains the full VM runtime.

---

## The virtual machine

### Stack-based architecture
The VM is a stack machine with a few key data structures per execution frame:

- `s` — value stack (operands, intermediate results)
- `c` — scope chain (Map with `__p` parent pointer)
- `t` — `this` binding
- `i` — instruction pointer into the bytecode array
- `y` — try/catch/finally stack
- `l` — lexical scope stack (block scoping)

### Dual execution paths
Obscura has two executors that share the same opcode dispatch:

- **XE** (async executor) — handles `await` by actually suspending on Promises. Real async/await, not generator transpilation.
- **XS** (sync executor) — for synchronous function bodies. Generated from XE by stripping `await` keywords.

### Why async/await works natively
Most JS obfuscators transpile `async`/`await` into generator state machines. This breaks `Promise.all`, `.then()` chains, and `try/catch` around async calls. Obscura doesn't transpile — the `AWAIT` opcode does a real `await` on the VM stack value. When a Promise resolves, execution resumes at the next instruction. The `CALL` opcode detects async functions (via the `async` flag on function descriptors) and routes them through the XE executor.

### Opcode dispatch
`src/runtime/dispatch-gen.js` generates the giant switch statement bodies. Each opcode group (ADD, CALL, etc.) has 3-5 random variant bytes. The VM uses a `__V2G__` lookup table to map variant bytes back to group indices for dispatch. This means no readable opcode strings appear in the obfuscated output.

Key opcodes:
| Group | Purpose |
|-------|---------|
| PUSH_CONST | Push a constant from the pool onto the stack |
| PUSH_VAR | Look up a variable in the scope chain |
| DECLARE_VAR | Create a new variable binding in current scope |
| CALL / CALL_METHOD | Invoke a function or method |
| NEW | Constructor call with prototype chain setup |
| GET_PROP / SET_PROP | Property access on objects |
| PUSH_FUNC | Create a closure-wrapped VM function |
| ENTER_SCOPE / EXIT_SCOPE | Block scoping for let/const |
| TRY / CATCH / FINALLY / END_TRY | Exception handling |
| AWAIT | Suspend on a Promise |
| CLASS_BODY | Set up prototype inheritance chain |
| SUPER_CALL / SUPER_METHOD | `super()` and `super.method()` |
| DESTRUCTURE_ARR / DESTRUCTURE_OBJ | Destructuring assignments |

### Function wrappers
The `W` function creates JavaScript wrappers around VM functions so they can be called from outside the VM. Each wrapper stores:
- `_v` — marker flag identifying it as a VM function
- `_o` — the original function descriptor (addr, params, async flag)
- `_s` — captured scope chain (for closures)
- `_ct` — captured `this` (for arrow functions)

Wrapper `.name` and `.length` are preserved via `Object.defineProperty`.

### Class compilation
`compileClass()` in the compiler handles:
- Constructors (explicit and default)
- Methods (static and instance, computed and non-computed)
- Getters and setters (via `__defineGS__` runtime helper)
- Private fields (prepended to constructor body)
- Super class inheritance (CLASS_BODY opcode + prototype chain)

Computed members are deferred in the compilation order so the key expression is evaluated after variable declarations.

### Constant pool
String constants are stored in a pool and referenced by index. At runtime, the `GC` function decodes them — strings may be XOR-encrypted with a per-build key for protection.

### Bytecode encryption
Two XOR layers protect the bytecode:
1. A derived key from the random seed is XORed with the raw bytecode
2. A per-build opcode XOR key is applied on top

The seed and encrypted bytecode are embedded in the output. At runtime, the VM derives the key, decrypts the bytecode into a `Uint8Array`, and begins execution.

---

## Project structure

```
src/
  cli.ts              — CLI entry point
  core.ts             — ObfuscateSource() API, @no-vm support, AST filtering
  config.ts           — ObfuscatorOptions type and defaults
  server.ts           — Web UI server
  browser.ts          — Browser bundle entry
  compiler/
    BytecodeCompiler.ts  — AST to bytecode compiler
    Opcode.ts            — Polymorphic opcode definitions
    PreObfuscator.ts     — Identifier mangling + junk injection
    types.ts             — TypeScript interfaces
    nodes/
      statements.ts      — Control flow compilation (if/switch/loops/try)
  runtime/
    Builder.ts           — VM packaging, encryption, constant encoding
    async-vm-template.js — VM runtime template (IIFE wrapper)
    dispatch-gen.js      — Generates opcode switch bodies
  web/
    index.html           — Web UI
tests/
  production-stress.js   — 45-case integration test
  edge-cases.js          — Edge case regression tests
  wrapper-stress.js      — 20-case function wrapper fidelity test
```

---

## Building and testing

```bash
npm install
npm run build

# Run the test suite
node dist/cli.js tests/production-stress.js -o /tmp/test.js --no-minify
node /tmp/test.js
```

---

## Key design decisions

### No generator transpilation for async
Generators add state machine overhead and break Promise combinators. The XE executor does real `await`, so `Promise.all()`, `.then()`, and `try/catch` around async calls work correctly.

### Polymorphic opcodes per emission
Every occurrence of the same logical operation uses a different raw byte value. This defeats simple pattern matching on the bytecode stream.

### Scope chain as linked Maps
Each VM frame has a `Map` for local variables with a `__p` parent pointer. Variable lookup walks the chain. Block scoping pushes/pops frames on the `l` (lexical) stack.

### One-pass compilation
The compiler emits bytecode in a single AST walk. Labels and patches handle forward jumps. No intermediate representation or optimization passes — the output is intentionally opaque.

### Per-build randomization
The seed, XOR keys, opcode variant choices, and constant encoding offsets are randomized every build. No two obfuscated outputs look the same, even for identical input.

---

## Limitations

- Generators (`function*`, `async function*`) are not supported — the compiler throws an error
- Tagged template literals are not supported
- `eval` / `new Function` at runtime execute in the VM scope, not the intended scope
- Deep recursion (>1000 frames) hits the JS engine stack limit
- `import`/`export` are compiled as no-ops (single-file processing)
- `extends Error`/`Array` — native constructors use internal slots unreachable through VM wrappers