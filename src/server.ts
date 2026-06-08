/**
 * Local web server for the VM obfuscator.
 *
 * Serves the web UI at / and provides a POST /api/obfuscate endpoint
 * that accepts source code + options and returns obfuscated output.
 *
 * No external dependencies — uses Node's built-in http module.
 *
 * Usage: node dist/server.js [--port=3000]
 *
 * @module server
 */

import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as vm from 'vm';
import { ObfuscateSource, ObfuscateResult } from './core';
import { ObfuscatorOptions } from './config';

const PORT = parseInt(process.env.PORT || '3000', 10);

for (const arg of process.argv) {
  if (arg.startsWith('--port=')) {
    const p = parseInt(arg.split('=')[1], 10);
    if (!isNaN(p) && p > 0 && p < 65536) {
      process.env.PORT = String(p);
    }
  }
}
const actualPort = parseInt(process.env.PORT || '3000', 10);

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

function serveStatic(res: http.ServerResponse, filePath: string): void {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (e) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}

function parseBody(req: http.IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = req.url || '/';

  if (req.method === 'POST' && url === '/api/obfuscate') {
    try {
      const raw = await parseBody(req);
      const payload = JSON.parse(raw);

      const source: string = payload.source || '';
      const options: Partial<ObfuscatorOptions> = payload.options || {};

      if (!source.trim()) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'No source code provided' }));
        return;
      }

      const result: ObfuscateResult = ObfuscateSource(source, options);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        code: result.code,
        stats: result.stats,
      }));
    } catch (e: any) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message || 'Internal error' }));
    }
    return;
  }

  if (req.method === 'POST' && url === '/api/run') {
    try {
      const raw = await parseBody(req);
      const payload = JSON.parse(raw);
      const code = payload.code || '';

      if (!code.trim()) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'No code provided' }));
        return;
      }

      let output = '';
      let _timedOut = false;
      const sandbox: any = {
        console: {
          log: (...args: any[]) => { output += args.map(a => typeof a === 'object' && a !== null ? JSON.stringify(a) : String(a)).join(' ') + '\n'; },
          error: (...args: any[]) => { output += '[error] ' + args.map(a => typeof a === 'object' && a !== null ? JSON.stringify(a) : String(a)).join(' ') + '\n'; },
          warn: (...args: any[]) => { output += '[warn] ' + args.map(a => typeof a === 'object' && a !== null ? JSON.stringify(a) : String(a)).join(' ') + '\n'; },
        },
        setTimeout: (fn: any, ms: any) => { if (typeof fn === 'function') setTimeout(fn, Math.min(ms || 0, 5000)); },
        setInterval: () => {},
        require: () => { throw new Error('require is not available'); },
        process: undefined,
        global: undefined,
      };
      sandbox.global = sandbox;

      const script = new vm.Script(code, { filename: 'obfuscated.js' });
      const context = vm.createContext(sandbox);

      const timeout = setTimeout(() => {
        _timedOut = true;
        res.writeHead(408, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Execution timed out after 5 seconds', output }));
      }, 5000);

      try {
        var result = script.runInContext(context, { timeout: 5000 });
        if (result && typeof result.then === 'function') {
          await result;
          await new Promise(r => setTimeout(r, 500));
        }
      } catch(e) {}
      
      if (!_timedOut) {
        clearTimeout(timeout);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ output: output || '(no output)', success: true }));
      }
    } catch (e: any) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message || 'Execution error', output: '' }));
    }
    return;
  }

  if (req.method === 'POST' && url === '/api/run') {
    try {
      const raw = await parseBody(req);
      const payload = JSON.parse(raw);
      const code = payload.code || '';

      if (!code.trim()) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'No code provided' }));
        return;
      }

      let output = '';
      const sandbox: any = {
        console: {
          log: (...args: any[]) => { output += args.map(String).join(' ') + '\n'; },
          error: (...args: any[]) => { output += '[error] ' + args.map(String).join(' ') + '\n'; },
          warn: (...args: any[]) => { output += '[warn] ' + args.map(String).join(' ') + '\n'; },
        },
        setTimeout: (fn: any, ms: any) => { if (typeof fn === 'function') setTimeout(fn, Math.min(ms || 0, 5000)); },
        setInterval: () => {},
        require: () => { throw new Error('require is not available'); },
        process: undefined,
        global: undefined,
      };
      sandbox.global = sandbox;

      const script = new vm.Script(code, { filename: 'obfuscated.js' });
      const context = vm.createContext(sandbox);

      const timer = setTimeout(() => {
        res.writeHead(408, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Execution timed out after 5 seconds', output }));
      }, 5000);

      script.runInContext(context, { timeout: 5000 });
      clearTimeout(timer);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ output: output || '(no output)', success: true }));
    } catch (e: any) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message || 'Execution error', output: '' }));
    }
    return;
  }

  if (req.method === 'GET') {
    let reqPath = url === '/' ? '/index.html' : url;

    reqPath = reqPath.replace(/\.\./g, '').replace(/\/\//g, '/');

    const webDir = path.join(__dirname, 'web');
    const filePath = path.join(webDir, reqPath);

    if (!filePath.startsWith(webDir)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    serveStatic(res, filePath);
    return;
  }

  res.writeHead(405);
  res.end('Method Not Allowed');
});

server.listen(actualPort, () => {
  console.log('');
  console.log('  OBSCURA - JS Obfuscation Engine');
  console.log('  Local: http://localhost:' + actualPort);
  console.log('');
  console.log('  Press Ctrl+C to stop');
  console.log('');
});