const fs = require("fs");

function getElfSection(pair) {
  const elf = pair.split("-").map((n) => parseInt(n));
  return {
    start: elf[0],
    end: elf[1],
  };
}

function isFullOverlap(firstElf, secondElf) {
  return (
    (firstElf.start <= secondElf.start && firstElf.end >= secondElf.end) ||
    (firstElf.start >= secondElf.start && firstElf.end <= secondElf.end)
  );
}

function isPartialOverlap(firstElf, secondElf) {
  return firstElf.end >= secondElf.start && secondElf.end >= firstElf.start;
}

result1 = 0;
result2 = 0;

const fileContents = fs.readFileSync("input.txt", "utf-8");

fileContents.split(/\r?\n/).forEach((line) => {
  const pair = line.split(",");
  const firstElf = getElfSection(pair[0]);
  const secondElf = getElfSection(pair[1]);

  if (isFullOverlap(firstElf, secondElf)) {
    result1++;
  }

  if (isPartialOverlap(firstElf, secondElf)) {
    result2++;
  }
});

console.log("Part1: ", result1);
console.log("Part2: ", result2);
