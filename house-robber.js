/**
 * @param {number[]} nums
 * @return {number}
 *
 * Thoughts: This proble sems can be easly solved by using DP The loop should
 * start at the last house. For each house since you cannot rob two connecting
 * house, the maximum number of money one can rob is maximum(m(n), m(n+2))
 *
 * Notice: This solution is slower than other solutions using same algorithm The
 * possible reason can the reversed traversing has worse usage of cache
 */
var rob = function (nums) {
  var maximumForEachHouse = nums.concat([0, 0]);
  for (let i = nums.length - 1; i >= 0; i--) {
    maximumForEachHouse[i] = Math.max(maximumForEachHouse[i + 1], nums[i] + maximumForEachHouse[i + 2]);
  }
  return maximumForEachHouse[0];
};