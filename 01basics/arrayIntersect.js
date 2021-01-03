/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let set1 = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }
  console.log(set1);
  let set2 = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      console.log(nums2[i]);
      set2.add(nums2[i]);
    }
  }
  return set2;
};

var intersectDups = function (nums1, nums2) {
  let map1 = new Map();
  for (let i = 0; i < nums1.length; i++) {
    if (!map1.has(nums1[i])) {
      map1.set(nums1[i], 0);
    }
    map1.set(nums1[i], map1.get(nums1[i]) + 1);
    // map1.get(nums1[i]) + 1;
  }
  let arrReturn = [];
  for (let i = 0; i < nums2.length; i++) {
    if (map1.has(nums2[i]) && map1.get(nums2[i]) > 0) {
      arrReturn.push(nums2[i]);
      map1.set(nums2[i], map1.get(nums2[i]) - 1);
    }
  }
  return arrReturn;
};
console.log(
  intersectDups([1, 2, 2, 6, 7, 7, 3], [2, 2, 6, 7, 5, 3, 3, 3, 3, 7])
);
