function arraysum(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b;
  });
  let largest = tempArr.pop();
  // return largest;
  let number = 0;
  tempArr.forEach((item) => {
    if (item === 1) {
      tempArr.splice(0, 4);
    }
  });
  return tempArr;
}
console.log(arraysum([1, 2, 4, 3, 5, 77, 8, 8]));
