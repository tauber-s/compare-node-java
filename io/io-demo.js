import fs from 'fs/promises';
import { performance } from 'perf_hooks';

const start = performance.now();

const tasks = Array.from({ length: 5 }, (_, i) => // 5 asynchronous file reads
  fs.readFile('./largefile.txt', 'utf8').then(() => { // largefile.txt size: 318MB
    console.log(`File ${i} done!`);
  })
);

Promise.all(tasks).then(() => {
  console.log(`Total time: ${(performance.now() - start).toFixed(2)} ms`);
});
