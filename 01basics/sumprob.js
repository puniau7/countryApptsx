const arryInput = [
  -85,
  -81,
  -55,
  43,
  -42,
  -33,
  -32,
  -29,
  -18,
  -17,
  -15,
  -10,
  -9,
  -8,
  -6,
  -5,
  -4,
  -3,
  -2,
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  11,
  12,
  14,
  16,
  19,
  25,
  28,
  35,
  40,
  45,
  56,

  99,
  100,
];
// -8,8
function sumZero(arr) {
  for (var i = 0; i <= arr.length; i++) {
    let temp = 0 - arr[i];
    for (var j = 0; j <= arr.length; j++) {
      if (arr[j] === temp) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(sumZero(arryInput));
