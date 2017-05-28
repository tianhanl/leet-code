/**
 * Question 137
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  nums.sort();
  let length = nums.length;
  for (let i = 0; i < length; i += 3) {
    if (nums[i] != nums[i + 1]) return nums[i];
  }
};