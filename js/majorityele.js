function majorityele(arr) {
  let sortedarr = arr.sort((a, b) => a - b);
  return sortedarr[sortedarr.length / 2];
}

console.log(majorityele([0, 1, 2, 3, 1, 1, 1, 1]));
