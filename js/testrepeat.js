function testrep(arr) {
  let tempNum = arr.reduce((acc, curr, index) => {
    acc[curr] = acc[curr]
      ? { ...acc[curr], amount: acc[curr]["amount"] + 1 }
      : { amount: 1, index };
    return acc;
  }, {});
  return tempNum;
}
console.log(testrep([1, 3, 3, 3, 3, 3, 3, 3, 2, 4]));
