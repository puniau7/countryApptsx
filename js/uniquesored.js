function uniquesorted(arr) {
  let values = [...new Set(arr)].sort((a, b) => {
    return a - b;
  });
  return values;
}
console.log(uniquesorted([1, 1, 3, 3, 3, 3, -1]));
