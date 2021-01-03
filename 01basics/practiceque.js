// const​ a = { b: {
//     c: ​'d' },
//     e: ​'f' }
//     const​ b = {...a};
//     b.b.c = ​'ym'
//     console.log(a.b.c);

// add(2)(3)(4)()
// add(2)()
// function sum(a, b) {
//   return a + b;
// }
// function add(ipFun) {
//   return function addinner(...argument) {
//     if (argument.length >= ipFun.length) {
//       return ipFun.apply(this, argument);
//     } else {
//       return function (...argument2) {
//         return addinner.apply(this, argument.concat(argument2));
//       };
//     }
//   };
// }

// let curriedSum = add(sum());

// const val = curriedSum(2)(3)();

// console.log(val());
function addOuter(a) {
  var add = function (b) {
    //console.log(a);
    if (typeof b === "undefined") {
      b = 0;
      return a;
    }
    return addOuter(a + b);
  };

  return add;
}

// let addFunc = add(2);
console.log(addOuter(3)(4)(5)());
// console.log(addFunc(4));
//let add2 = (a) => (b) => a + b;
//console.log(add2(2)(3));
