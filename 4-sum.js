/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
  });
  var result = [];
  for (let n = 0; n < (nums.length - 3); n++) {
    if (nums[n] === nums[n - 1]) continue;
    for (let i = n + 1; i < (nums.length - 2); i++) { // must have three elements
      if ((i - 1 !== n) && nums[i] === nums[i - 1]) continue;
      let lhs = i + 1;
      let rhs = nums.length - 1;
      while (lhs < rhs) {
        if (nums[lhs] + nums[rhs] + nums[i] + nums[n] === target) {
          result.push([nums[n], nums[i], nums[lhs], nums[rhs]]);
          while (nums[lhs] === nums[lhs + 1] && lhs < rhs) lhs++;
          lhs++;
          while (nums[rhs] === nums[rhs - 1] && lhs < rhs) rhs--;
          rhs--;
        } else if (nums[lhs] + nums[rhs] + nums[i] + nums[n] > target) {
          rhs--;
        } else {
          lhs++;
        }
      }

    }

  }

  return result;
};