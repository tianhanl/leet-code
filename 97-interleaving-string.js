/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const helper = function (s1, s2, s3, countLeft, countRight, count, dp) {
  if (count === s3.length) {
    return true;
  } else {
    let resultLeft, resultRight;
    if (countLeft < s1.length && (s1[countLeft] === s3[count])) {
      if (dp[countLeft + 1] && (dp[countLeft + 1][countRight] !== undefined)) {
        resultLeft = dp[countLeft + 1][countRight];
      } else {
        resultLeft = helper(s1, s2, s3, countLeft + 1, countRight, count + 1, dp);
        if (dp[countLeft + 1]) dp[countLeft + 1][countRight] = resultLeft;
      }
    }
    if (countRight < s2.length && (s2[countRight] === s3[count])) {
      if (dp[countLeft] && (dp[countLeft][countRight + 1] !== undefined)) {
        resultRight = dp[countLeft][countRight + 1];

      } else {
        resultRight = helper(s1, s2, s3, countLeft, countRight + 1, count + 1, dp);
        if (dp[countLeft]) dp[countLeft][countRight + 1] = resultRight;
      }

    }
    return Boolean(resultLeft || resultRight);
  }
}

var isInterleave = function (s1, s2, s3) {
  if (s3.length === 0) return true;
  if (s3.length !== (s1.length + s2.length)) return false;
  let dp = [];
  for (let i = 0; i < s1.length; i++) {
    dp.push([]);
  }
  return Boolean(helper(s1, s2, s3, 0, 0, 0, dp));
};