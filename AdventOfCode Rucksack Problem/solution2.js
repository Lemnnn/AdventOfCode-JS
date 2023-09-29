const fs = require("fs");

const fileContents = fs.readFileSync("input.txt", "utf-8");
const lines = fileContents.split(/\r?\n/);
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sum = 0;

for (let i = 0; i < lines.length; i += 3) {
  const firstString = lines[i];
  const secondString = lines[i + 1];
  const thirdString = lines[i + 2];

  let commonString = getCommonString(firstString, secondString, thirdString);
  console.log(commonString);

  if (commonString) {
    sum += letters.indexOf(commonString) + 1;
  }
}
console.log("Summ:", sum);

function getCommonString(firstString, secondString, thirdString) {
  let commonString;

  [...firstString].forEach((x) => {
    [...secondString].forEach((y) => {
      [...thirdString].forEach((z) => {
        if (x === y && y === z && z === x) {
          commonString = x;
        }
      });
    });
  });
  return commonString;
}
