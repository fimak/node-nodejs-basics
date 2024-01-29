import { Worker } from 'node:worker_threads';
import os from 'node:os';

const performCalculations = async () => {
  // Write your code here
  const coresAmount = os.cpus().length;
  const results = [];
  let completedWorkers = 0;

  const workers = new Array(coresAmount).fill(null).map((el, i) => {
    const worker = new Worker('./worker.js');

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
