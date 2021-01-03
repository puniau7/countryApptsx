/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Input: s = "rat", t = "car"
// Output: false
var isAnagram = function (s, t) {
  let arr1 = s.split("").sort().join("");
  let arr2 = t.split("").sort().join("");
  console.log(arr1);
  console.log(arr2);
  if (arr1 === arr2) {
    return true;
  }
  return false;
};
console.log(isAnagram("cat", "atc"));
