/**
 * Question 16
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  let closest = null;
  for (let i = 0; i < nums.length - 2; i++) {
    let lhs = i + 1;
    let rhs = nums.length - 1;
    while (lhs < rhs) {
      let difference = (nums[lhs] + nums[rhs] + nums[i]) - target;
      if (closest === null) {
        closest = difference;
      } else {
        if (Math.abs(difference) < Math.abs(closest)) closest = difference;
        if (difference > 0) { // sum is larger than target
          rhs--;
        } else if (difference < 0) { // sum is smaller than target
          lhs++;
        } else {
          return target;
        }
      }
    }
  }
  return closest + target;
};