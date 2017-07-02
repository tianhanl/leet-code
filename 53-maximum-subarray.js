/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = [0];
  let ret;
  for (let i = nums.length - 1; i >= 0; i--) {
    max[nums.length - i] = Math.max(nums[i], nums[i] + max[nums.length - i - 1]);
    if (!ret && ret !== 0) {
      ret = max[nums.length - i];
    } else {
      ret = Math.max(ret, max[nums.length - i]);
    }
  };
  return ret;

};