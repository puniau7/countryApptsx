//(['a', 'c', 'b', 'd', 'c', 'b', 'e']

//const filterNonUnique = (array) => {
let mySet = new Set();
console.log(
  ["a", "c", "b", "d", "c", "b", "e"].filter((el) => {
    if (mySet.has(el)) {
      return true;
    } else mySet.add(el);
  })
);
//};
//console.log(filterNonUnique(["a", "c", "b", "d", "c", "b", "e"]));
