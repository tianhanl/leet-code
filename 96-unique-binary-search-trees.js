/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // tree with length 0 has 0 variation, tree with length 1 has 1 variation;
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    let curr = 0;
    for (let j = 1; j <= i; j++) {
      curr += (dp[j - 1] * dp[i - j]);
    }
    dp.push(curr);
  }
  return dp[n];

};