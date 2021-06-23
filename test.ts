import removeDuplicates from ".";
const chalk = require("chalk");

console.log("Case: Input: nums = [1,1,2]");
if (removeDuplicates([1, 1, 2]) === 2) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}

console.log("Case: Input: nums = [0,0,1,1,1,2,2,3,3,4]");
if (removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) === 5) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}

console.log("Case: Input: nums = [-3,-1,0,0,0,3,3]");
if (removeDuplicates([-3, -1, 0, 0, 0, 3, 3]) === 4) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}
