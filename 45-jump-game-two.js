/**
 * Question 45
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let count = 0;
  let currEnd = 0;
  let currFar = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    currFar = Math.max(currFar, i + nums[i]);
    if (i === currEnd) {
      count++;
      currEnd = currFar;
    }
  }
  return count;
};