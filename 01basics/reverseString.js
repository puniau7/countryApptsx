// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (str) {
  let s = str.split("");
  let temp = "";
  let end = s.length - 1;

  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    temp = s[i];
    s[i] = s[end];
    s[end] = temp;
    end--;
  }
  console.log(s.join(""));
};
reverseString("hello hi ");
