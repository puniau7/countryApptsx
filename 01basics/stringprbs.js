// Convert a given sentence from camelCase to Title Case
// const camelCaseText = "the simplestThings in LIFE are alwaysThe best";
// camelCaseText.split(" ");
// console.log(camelCaseText.toLowerCase().split(" "));
// const words = camelCaseText.toLowerCase().split(" ");
// const newarr = [];

// for (i = 0; i <= words.length; i += 2) {
//   console.log(words);
//   const wordIndex = i - 1;
//   const firstWord = words[wordIndex];
//   let secondWord = words[wordIndex + 1];
//   console.log(secondWord);
//   secondWord = `${secondWord[1].toUpperCase()}${secondWord.slice(1)}`;
//   newarr.push(`${firstWord}${secondWord}`);
// }
// console.log(newarr.join(" "));

// function foo1() {
//   let i = 0;
// }
// foo1();
// console.log(i);

let arr = [1, 3, 2, 4, 4, 2, "a", "b", "a"];
const map = arr.reduce((acc, curr) => {
  return acc.set(curr, (acc.get(curr) || 0) + 1);
}, new Map());
console.log(map);
