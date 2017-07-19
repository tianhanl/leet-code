/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let col, row;
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((element, index) => {
      if (element === 0) {
        if (i === 0) row = true;
        matrix[i][0] = 0;
        if (index === 0) col = true;
        matrix[0][index] = 0;
      }
    })
  }
  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      for (let j = 1; j < matrix.length; j++) {
        matrix[j][i] = 0;
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < matrix[0].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  if (col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  if (row) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
};