/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let length = nums.length;
  let sorted = nums.slice().sort((lhs, rhs) => lhs - rhs);
  let lhs = 0;
  while (lhs < length && nums[lhs] === sorted[lhs]) lhs++;
  let rhs = length - 1;
  while (rhs > lhs && nums[rhs] === sorted[rhs]) rhs--;
  return rhs - lhs + 1;
};
