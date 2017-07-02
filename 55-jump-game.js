/**
 * Question 55
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // the jump game start at position 0
  let reachable = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reachable) return false;
    reachable = Math.max(reachable, i + nums[i]);
  }
  return true;
};