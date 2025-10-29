import { execSync } from "child_process";
import chalk from "chalk";

const runCommand = cmd => {
  const start = process.hrtime();

  execSync(cmd, { stdio: "ignore" });

  const diff = process.hrtime(start);
  const ms = diff[0] * 1000 + diff[1] / 1e6;

  return ms.toFixed(0);
};

console.log(chalk.cyanBright("\nNode.js vs Java — Async comparison\n"));
console.log(chalk.gray("Running 100 concurrent HTTP requests...\n"));

const nodeTime = runCommand("node compare-demo.js");
const javaTime = runCommand("java CompareDemo");
const ratio = (javaTime / nodeTime).toFixed(2);

console.log(chalk.bold("Results:"));
console.log(`${chalk.cyan("| Node.js |")} finished in ${chalk.cyanBright(`${nodeTime} ms`)}`);
console.log(`${chalk.cyan("| Java    |")} finished in ${chalk.cyanBright(`${javaTime} ms`)}\n`);

if (ratio > 1) {
  console.log(chalk.green(`***Node.js was about ${ratio}x faster for this workload!\n`));
} else {
  console.log(chalk.yellow(`***Java was slightly faster this time (${ratio}x difference).\n`));
};
