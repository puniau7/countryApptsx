//using resursion
function getNthFib(n) {
  // Write your code here.
  if (n == 2) {
    return 1;
  }
  if (n == 1) return 0;
  else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}
console.log(getNthFib(5));
//time - O(2powN)
//spaceO(N)

//alternate
//memoize older fibs()
