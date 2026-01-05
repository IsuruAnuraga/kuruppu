#!/usr/bin/env node
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || '8080';
const servePath = join(__dirname, 'node_modules', '.bin', 'serve');

console.log(`Starting server on port ${port}...`);
console.log(`PORT environment variable: ${process.env.PORT || 'not set, using default 8080'}`);

const serve = spawn(servePath, ['-s', 'dist', '-l', port], {
  stdio: 'inherit',
  cwd: __dirname
});

serve.on('error', (err) => {
  console.error('Failed to start server:', err);
  console.error('Make sure the serve package is installed: npm install');
  process.exit(1);
});

serve.on('exit', (code, signal) => {
  if (signal) {
    console.error(`Server was killed by signal: ${signal}`);
  } else if (code !== 0) {
    console.error(`Server exited with code: ${code}`);
  }
  process.exit(code || 0);
});

process.on('SIGTERM', () => {
  serve.kill('SIGTERM');
});

process.on('SIGINT', () => {
  serve.kill('SIGINT');
});

