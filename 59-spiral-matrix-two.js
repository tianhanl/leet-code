/**
 * Question 59
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 0) return [];
  if (n === 1) return [[1]];
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  let count = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  while ((bottom >= top && right >= left) && ((bottom >= 0) && (right >= 0))) {
    for (let j = left; j <= right; j++) {
      result[top][j] = count;
      count++;
    }
    for (let j = top + 1; j <= bottom - 1; j++) {
      result[j][right] = count;
      count++;
    }
    if (!(top === bottom)) {
      for (let j = right; j >= left; j--) {
        result[bottom][j] = count;
        count++;
      }
    }
    if (!(left === right)) {
      for (let j = bottom - 1; j >= top + 1; j--) {
        result[j][left] = count;
        count++;
      }
    }
    top++;
    bottom--;
    left++;
    right--;
  }
  return result;
};