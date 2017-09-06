/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let total = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1); // There is at least one way that the result can be 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      total += map.get(sum - k);
    }
    map.set(sum, (map.has(sum) ? map.get(sum) : 0) + 1);
  }
  return total;
};
