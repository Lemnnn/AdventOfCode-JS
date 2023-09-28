const fs = require("fs");

const fileContents = fs.readFileSync("input.txt", "utf-8");

let elf = [];
let i = 0;
elf[i] = 0;
fileContents.split(/\r?\n/).forEach((line) => {
  if (line === "") {
    i++;
    elf[i] = 0;
  } else {
    elf[i] += parseInt(line);
  }
});
let sorted = elf.sort((a, b) => (a > b ? -1 : 1));

console.log(sorted[0]);
console.log(sorted[0] + sorted[1] + sorted[2]);
