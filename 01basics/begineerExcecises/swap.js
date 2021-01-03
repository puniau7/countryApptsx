// let first = "usha";
// let last = "punia";
// let temp = first;
// first = last;
// last = temp;
// console.log(first, last);

// let arr = [1, 8, 92];
// const max = Math.max(...arr);
// console.log(max);

// let obj = {
//   name: "usha",
//   surname: "punia",
//   age: 30,
// };
// for (const key in obj) {
//   if (obj.hasOwnProperty(key) && typeof obj[key] === "string") {
//     console.log(obj[key]);
//   }
// }
// // for (const iterator of obj) {
// //   console.log(iterator);
// // }
// const arr12 = [20, 50, 40];
// const sum = arr12.reduce((el, acc) => {
//   console.log(el, acc);
//   el = el + acc;
//   return el;
// }, 0);
// console.log(Math.floor(sum / arr12.length));
//sum of args
function sumOfArgs() {
  let arr = [...arguments];
  console.log(arr);
  let sum = arr.reduce((el, acc) => {
    acc = acc + el;
    return acc;
  }, 0);
  return sum;
}
console.log(sumOfArgs(1, 2, 3));
