function caps(str) {
  let words = str.split(" ").map((word) => {
    // let firstLetter = word.slice(0, 1);
    // let restWord = word.slice(1);
    // firstLetter = firstLetter.toUpperCase();
    // // console.log(firstLetter, restWord);
    // return `${firstLetter}${restWord}`;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(" ");
}
console.log(caps("i want a bag"));
