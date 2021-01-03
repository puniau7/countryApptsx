function maxsubarray(arr) {
  let prevmax = 0;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    console.log(prevmax + arr[i], arr[i]);
    prevmax = Math.max(prevmax + arr[i], arr[i]);
    console.log(max, prevmax);
    max = Math.max(max, prevmax);
  }

  return max;
}

console.log(maxsubarray([1, -2, 3]));
