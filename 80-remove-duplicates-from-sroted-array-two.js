/**
 * Question 80
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[curr - 2]) {
      nums[curr] = nums[i];
      curr++;
    }
  }
  return curr;
};