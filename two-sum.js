/**
 * Question 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// for each number there is two option, choose or not
// if not choose the status be target, choose targt-num[n]
var twoSum = function (nums, target) {
  var length = nums.length;
  var result = [];
  for (let i = length - 1; i >= 0; i--) {
    result[i] = target - nums[i];
    for (let n = length - 1; n > i; n--) {
      if (result[i] - nums[n] === 0) {
        return [i, n];
      }
    }
  }
};