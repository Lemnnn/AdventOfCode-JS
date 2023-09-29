const fs = require("fs");

const fileContents = fs.readFileSync("input.txt", "utf-8");

let sum = 0;

const priority = (letter) => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  sum += letters.indexOf(letter) + 1;
};

fileContents.split(/\r?\n/).forEach((line) => {
  const halfLenght = Math.floor(line.length / 2);
  let firstHalf = line.slice(0, halfLenght);
  let secondHalf = line.slice(halfLenght, line.length);
  let isIn = false;

  for (let i = 0; i < firstHalf.length; i++) {
    for (let j = 0; j < secondHalf.length; j++) {
      if (firstHalf[i] === secondHalf[j] && isIn === false) {
        priority(firstHalf[i]);
        isIn = true;
      }
    }
  }
});

console.log(sum);
