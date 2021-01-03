function unique(str) {
  //   let values = {};
  //   for (let letter of str) {
  //     if (values[letter]) {
  //       return false;
  //     }
  //     values[letter] = "exists";
  //   }
  //   return values;
  for (let i = 0; i < str.length; i++) {
    console.log(str.lastIndexOf(str[i]));
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}
console.log(unique("abcdefe"));
