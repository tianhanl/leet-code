/**
 * Question: 70
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // n = 1, 1, 1 case
  // n = 2, 1,1 or 2, 2 cases
  // n = 3, 1,1,1 or 1,2 or 2,1 3 cases
  // n = 4, 1,1,1,1 or 2,1,1 or 1,2,1 or 1,1,2 or 2, 5 cases;
  // n = 5, 1,1,1,1,1 or 2,1,1,1 or 1,2,1,1 or 1,1,2,1 or 1,1,1,2 or 1,2,2 or 2,1,2 or 2,2,1, 8 cases
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  var resultArray = [];
  resultArray[0] = 1;
  resultArray[1] = 2;
  for (let i = 2; i <= n - 1; i++) {
    resultArray[i] = resultArray[i - 1] + resultArray[i - 2];
  }
  return resultArray[n - 1];
};