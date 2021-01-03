// const missingNum = (inputArr) => {
//   const expectedSum = ((inputArr.length + 1) * (inputArr.length + 2)) / 2;
//   console.log(expectedSum);

//   const reducer = (acc, el) => {
//     console.log(el, acc);
//     return acc + el;
//   };
//   return expectedSum - inputArr.reduce(reducer);
// };

//missing number in unsorted array using bitwise XOR
// console.log(missingNum([1, 2, 3, 5]));
// const arr = [3, 1, 2, 5];
// //1^3^2^5 =
// var actualxor = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   actualxor = actualxor ^ arr[i];
// }

// let fullxor = 1;
// for (let i = 2; i <= arr.length + 1; i++) {
//   fullxor = fullxor ^ i;
// }
// console.log(actualxor ^ fullxor);

//find duplicate number in an array
const arr = [1, 3, 3, 4, 1, 4];

const findDUP = () => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[Math.abs(arr[i])] < 0) {
      console.log(Math.abs(arr[i]));
    } else {
      arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
    }
  }
};
console.log(findDUP(arr));
