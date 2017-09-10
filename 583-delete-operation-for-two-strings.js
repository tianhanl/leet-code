/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let length1 = word1.length;
  let length2 = word2.length;
  let dp = [];
  for (let i = 0; i <= length1; i++) {
    dp.push([]);
    for (let j = 0; j <= length2; j++) {
      dp[i].push(0);
    }
  }
  for (let i = 1; i <= length1; i++) {
    for (let j = 1; j <= length2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  let max = dp[length1][length2];
  return length1 + length2 - 2 * max;
};
