const fs = require("fs");

const fileContents = fs.readFileSync("input.txt", "utf-8");

let score = 0;
fileContents.split(/\r?\n/).forEach((line) => {
  const newLine = line.split(" ");
  let elfPick = newLine[0];
  let myPick = newLine[1];

  switch (myPick) {
    case "X": {
      if (elfPick === "A") {
        score += 3;
      } else if (elfPick === "B") {
        score += 1;
      } else score += 2;
      break;
    }
    case "Y": {
      if (elfPick === "A") {
        score += 4;
      } else if (elfPick === "B") {
        score += 5;
      } else score += 6;
      break;
    }
    case "Z":
      if (elfPick === "A") {
        score += 8;
      } else if (elfPick === "B") {
        score += 9;
      } else score += 7;
      break;
  }
});

console.log(score);
