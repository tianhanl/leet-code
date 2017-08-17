/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
      let lhs = nums[i];
      while (set.has(lhs - 1)) {
        lhs = lhs - 1;
        set.delete(lhs);
      }
      let rhs = nums[i];
      while (set.has(rhs + 1)) {
        rhs = rhs + 1;
        set.delete(rhs);
      }
      max = Math.max(max, rhs - lhs + 1);
    }
  }
  return max;
};
