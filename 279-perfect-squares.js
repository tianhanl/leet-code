/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n < 1) return 0;
  let dp = [0];
  for (let i = 1; i <= n; i++) {
    let root = Number.parseInt(Math.sqrt(i));
    let min = i;
    for (let j = 1; j <= root; j++) {
      min = Math.min(dp[i - j * j] + 1, min);
    }
    dp[i] = min;
  }
  return dp[n];
};
