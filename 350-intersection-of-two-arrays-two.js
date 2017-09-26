/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map1 = new Map();
  let map2 = new Map();
  let result = [];
  nums1.forEach(element => {
    if (map1.has(element)) {
      map1.set(element, map1.get(element) + 1);
    } else {
      map1.set(element, 1);
    }
  });

  nums2.forEach(element => {
    if (map2.has(element)) {
      map2.set(element, map2.get(element) + 1);
    } else {
      map2.set(element, 1);
    }
  });

  let left = map1.size >= map2.size ? map1 : map2; // the larger one
  let right = map1.size < map2.size ? map1 : map2;
  right.forEach((value, key) => {
    let times = left.has(key) ? Math.min(value, left.get(key)) : 0;
    for (let i = 0; i < times; i++) {
      result.push(key);
    }
  });
  return result;
};
