/**
 * @param {number[]} nums
 * @return {boolean}
 */
// recursive find subset
var canPartition = function(nums) {
  let mid = nums.reduce((lhs, rhs) => lhs + rhs) / 2;
  if (!Number.isInteger(mid)) return false;
  let dp = new Array(mid + 1).fill(false);
  dp[0] = true;
  nums.forEach(element => {
    for (let i = mid; i > 0; i--) {
      if (i >= element) {
        dp[i] = dp[i] || dp[i - element];
      }
    }
  });

  return dp[mid];
};
