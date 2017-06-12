/**
 * Question 118
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows < 1) return [];
  let result = [[1]];
  if (numRows === 1) return result;
  for (let i = 1; i < numRows; i++) {
    let row = [];
    for (let n = 0; n <= i; n++) {
      leftUp = result[i - 1][n - 1] ? result[i - 1][n - 1] : 0;
      rightUp = result[i - 1][n] ? result[i - 1][n] : 0;
      row.push(leftUp + rightUp);
    }
    result.push(row);
  }
  return result;
};