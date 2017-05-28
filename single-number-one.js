/**
 * Question 136
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort();
  let length = nums.length;
  let result;
  for (let i = 0; i <= length; i += 2) {
    if (nums[i] != nums[i + 1]) {
      result = nums[i];
      break;
    }
  }
  return result;
};