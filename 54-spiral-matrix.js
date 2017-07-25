/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let result = [];
  if (!matrix || !matrix.length || matrix[0].length < 1) return [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  while ((bottom >= top && right >= left) && ((bottom >= 0) && (right >= 0))) {
    console.log(top, bottom, right, left);
    for (let j = left; j <= right; j++) {
      result.push(matrix[top][j]);
    }
    for (let j = top + 1; j <= bottom - 1; j++) {
      result.push(matrix[j][right]);
    }
    if (!(top === bottom)) {
      for (let j = right; j >= left; j--) {
        result.push(matrix[bottom][j]);
      }
    }
    if (!(left === right)) {
      for (let j = bottom - 1; j >= top + 1; j--) {
        result.push(matrix[j][left]);
      }
    }
    top++;
    bottom--;

    left++;
    right--;
  }
  return result;
};