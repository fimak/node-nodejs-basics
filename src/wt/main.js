import path from 'node:path';
import { Worker } from 'node:worker_threads';
import os from 'node:os';

const performCalculations = async () => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const workerPath = path.join(__dirname, 'worker.js');
  const coresAmount = os.cpus().length;
  const results = [];
  let completedWorkers = 0;

  const workers = new Array(coresAmount).fill(null).map((el, i) => {
    const worker = new Worker(workerPath);

    worker.on('message', (message) => {
      results[i] = message;
      completedWorkers++;
      if (completedWorkers === coresAmount) {
        console.log(results);
      }
    });

    worker.postMessage(10 + i);
  });
};

await performCalculations();
