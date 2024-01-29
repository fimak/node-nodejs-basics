import { spawn } from 'node:child_process';
import path from 'node:path';
import { Duplex } from 'node:stream';

const spawnChildProcess = async (args) => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const scriptPath = path.join(__dirname, 'files', 'script.js');

  const childProcess = spawn('node', [scriptPath, ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

  const duplexStream = new Duplex({
    write(chunk, encoding, callback) {
      childProcess.stdin.write(chunk, encoding, callback);
    },
    read(size) {}
  });

  process.stdin.pipe(duplexStream);

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
