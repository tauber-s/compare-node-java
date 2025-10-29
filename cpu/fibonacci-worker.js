import { parentPort, workerData } from 'worker_threads';

const fibonacci = n => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

const result = fibonacci(workerData);
parentPort.postMessage(result);
