/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  return nums.reduce((lhs, rhs) => (lhs ^= rhs));
};
