// console.log(1 + true);
// console.log(true + true);
// console.log("1" + true);
// console.log("2" < "3");
// console.log("two" < "three");

// var x = 1;
// var y = x;
// x = 0;
// console.log(x, y);

// var x = [1];
// var y = x;
// x = [];
// console.log(x, y);

// function abc() {
//   console.log(this);
// }
// abc();
// new abc();

// var x = 1;
// var obj = {
//   x: 2,
//   getX: function () {
//     return console.log(this.x);
//   },
// };
// obj.getX();
// let a = obj.getX;
// a();

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// setTimeout(() => console.log("C"), 0);
// console.log("D");

// setTimeout(function () {
//   console.log("a");
// }, 0);
// Promise.resolve()
//   .then(function () {
//     console.log("b");
//   })
//   .then(function () {
//     console.log("c");
//   });
// console.log("d"); //dbca

// let obj1 = {
//   a: 1,
//   b: 2,
// };
// console.log(obj1);
// function mutate(obj2) {
//   obj2 = { a: 4, c: 6 };
// }
// mutate(obj1);
// console.log(obj1);
