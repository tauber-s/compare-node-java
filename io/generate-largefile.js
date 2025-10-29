import fs from 'fs';

const file = fs.createWriteStream('./largefile.txt');

for (let i = 0; i < 5_000_000; i++) {
  file.write(`Et harum quidem rerum facilis est et expedita distinctio [${i}]\n`);
};

file.end(() => console.log('largefile.txt created successfully!'));
