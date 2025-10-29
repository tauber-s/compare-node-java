import { performance } from 'perf_hooks';

const start = performance.now();

const fibonacci = n => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

console.log("Calculating...");
const result = fibonacci(40);

console.log(`Result: ${result}`);
console.log(`Total time: ${(performance.now() - start).toFixed(2)} ms`);
