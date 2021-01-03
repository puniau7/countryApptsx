//{4, 2, -3, 1, 6}

function isSumExists() {
  let arr = [4, 2, 0, 1, 1, -6];
  var i = 0;
  //    for(var i =0; i< arr.length; i ++){

  //    }
  //iterate over
  // two loops
  // first element and iterate over the array (i)
  // second loop (i+1)
  //4
  //6
  //4
  //4
  //5
  //11

  // 1. keep two pointers i =0 and sum =0;
  // add sum - arr[i] = 0+4 = 4 (untill we have number less than 0 we will continue)
  // sum + arr[i] = 4- (2) = 2
  // sum + arr[i] = 2- (-2) = 4

  // loop will continu
  // we will continue = previous sum + arr [j] = 2+(-2) break and return true
  // else we will keep increasing the window size
  while (i < arr.length) {}
}
