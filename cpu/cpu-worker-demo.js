import { Worker } from 'worker_threads';
import { performance } from 'perf_hooks';

const start = performance.now();

const worker = new Worker('./fibonacci-worker.js', {
  workerData: 40,
});

worker.on('message', (result) => {
  console.log(`Result: ${result}`);
  console.log(`Total time: ${(performance.now() - start).toFixed(2)} ms`);
});

worker.on('error', (err) => {
  console.error('Worker error:', err);
});

worker.on('exit', (code) => {
  if (code !== 0)
    console.error(`Worker stopped with exit code ${code}`);
});
