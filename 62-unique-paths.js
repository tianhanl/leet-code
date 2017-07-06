/**
 * Question 62
 * Using dp for this problem
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function (m, n) {
  if (m <= 0 || n <= 0) return 0;
  let dp = [];
  // initialize the matrix
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    dp[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let k = 1; k < n; k++) {
      dp[i][k] = dp[i - 1][k] + dp[i][k - 1];
    }
  }
  return dp[m - 1][n - 1];
};