/** question 15
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
  });
  var result = [];
  for (let i = 0; i < (nums.length - 2); i++) { // must have three elements
    if (nums[i] === nums[i - 1]) continue;

    let lhs = i + 1;
    let rhs = nums.length - 1;
    while (lhs < rhs) {
      if (nums[lhs] + nums[rhs] + nums[i] === 0) {
        result.push([nums[i], nums[lhs], nums[rhs]]);
        while (nums[lhs] === nums[lhs + 1] && lhs < rhs) lhs++;
        lhs++;
        while (nums[rhs] === nums[rhs - 1] && lhs < rhs) rhs--;
        rhs--;
      } else if (nums[lhs] + nums[rhs] + nums[i] > 0) {
        rhs--;
      } else {
        lhs++;
      }
    }

  }
  return result;

};