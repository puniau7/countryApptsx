/**
 * @param {string} s
 * @return {number}
 */
function substringCalculator(s) {
  //let k=0;
  let set = new Set();
  set.add(s);
  // Write your code here
  for (let i = 0; i < s.length; i++) {
    set.add(s.charAt(i));
    let k = i;
    while (k <= s.length) {
      let str = s.substr(i, k);
      if (str.length > 0) {
        set.add(str);
      }
      k++;
    }
  }
  console.log(set);
  return set.size;
}

console.log(substringCalculator("abcde"));
