// practivce makes perfect

//perfeact makes practice
// [’P’,’r’,’a’,’c’,’t’,’i’,’c’,’e’,’ ’,’m’,’a’,’k’,’e’,’s’, ’ ’,‘p’,’e’,’r’,’f’,’e’,’c’,’t’]
// ‘p’,’e’,’r’,’f’,’e’,’c’,’t’ ’,’m’,’a’,’k’,’e’,’s’, ’ ’’P’,’r’,’a’,’c’,’t’,’i’,’c’,’e’,’
// let input

// ['1','2','3']

// function reversetheString() {
//   //let arr=['p','r','a’,’c’,’t’,’i’,’c’,’e’,’ ’,’m’,’a’,’k’,’e’,’s’, ’ ’,‘p’,’e’,’r’,’f’,’e’,’c’,’t’];
//   let arr = ["practice", "makes", "perfect"];
//   //1. loop through the array
//   for (let i = 0; i < arr.length; i++) {
//     var str = arr[i];
//     //2. get char Array out of each string
//     const strArray = str.split("");
//     //3. reverse the first string.
//     strArray.reverse();
//     console.log(strArray);
//   }
function swap() {
  //let arr=['p','r','a’,’c’,’t’,’i’,’c’,’e’,’ ’,’m’,’a’,’k’,’e’,’s’, ’ ’,‘p’,’e’,’r’,’f’,’e’,’c’,’t’];
  let arr = ["practice", "makes", "man", "perfect"];
  //mid
  //strta
  //end
  let mid = Math.floor(arr.length / 2);
  let i = 0;
  let j = arr.length - 1;
  while (i <= mid) {
    // swaping last and first
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  return arr;
}
console.log(swap());
