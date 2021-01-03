//flatten a json
//find depth of json
// deep clone a json
//javascript obj add a read only property

//all prime numbers in a range
function isPrime(n) {
  if (n <= 2) {
    return false;
  }
  // a number is a prime if its not divisible by any prime less(or equal) than its square root
  let q = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= q; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(9));

//sum of args
function sumOfArgs(...item) {
  //let arr = [...arguments];
  console.log(item);
  let sum = item.reduce((el, acc) => {
    acc = acc + el;
    return acc;
  }, 0);
  return sum;
}
console.log(sumOfArgs(1, 2, 3));

//read only property in javascript object
const objt = {};
Object.defineProperty(objt, "prop", {
  value: "abc",
  writable: false,
});
