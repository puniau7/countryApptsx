// console.log("heloo");
// var mymap = new Map();
// mymap.set(0, "usha");
// mymap.set(1, "vipul");
// console.log(mymap.delete(0));
//[1,3,4,12]=> [01,03,04,12]

//const padded = [1, 2, 4].map((el) => (el < 9 && el > 0 ? `0${el}` : el));

//camelCase to Title Case
// let test = "myName isUsha";
// let arr = test.split(" ");

// let changedArr = arr.map((el) => {
//   return el.replace(/([A-Z])/g, " $1");
// });

// let arrlower = changedArr.map((el) => {
//   return el.toLowerCase().trim();
// });
// const newarr = arrlower.join(" ").split(" ");

// console.log(newarr);
// const captilalised = newarr.map((el) => `${el[0].toUpperCase()}${el.slice(1)}`);
// console.log(captilalised.join(" "));

// function unique(array) {
//   let seen = new Set();
//   return array.filter((item) => {
//     if (!seen.has(item)) {
//       seen.add(item);
//       return true;
//     }
//   });
// }
// console.log(unique(["a", "b", "a"]));
// let arr = [1, 3, 2, 4, 4, 2, "a", "b", "a"];
// const map = arr.reduce((acc, curr) => {
//   return acc.set(curr, (acc.get(curr) || 0) + 1);
// }, new Map());
// console.log(map);
