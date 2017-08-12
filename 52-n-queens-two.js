/**
 * @param {number} n
 * @return {string[][]}
 */
const setThreatened = function(table, row, col) {
  for (let i = row + 1; i < table.length; i++) {
    table[i][col] = true;
  }
  let nextRow = row + 1;
  let nextCol = col + 1;
  while (nextRow < table.length && nextCol < table.length) {
    table[nextRow][nextCol] = true;
    nextRow++;
    nextCol++;
  }

  nextRow = row + 1;
  nextCol = col - 1;
  while (nextRow < table.length && nextCol >= 0) {
    table[nextRow][nextCol] = true;
    nextRow++;
    nextCol--;
  }
};

const helper = function(threatened, row) {
  if (row === threatened.length) {
    return 1;
  } else {
    let result = 0;
    for (let i = 0; i < threatened.length; i++) {
      if (!threatened[row][i]) {
        let pre = threatened.map(element => element.slice());
        setThreatened(threatened, row, i);
        result += helper(threatened, row + 1);
        threatened = pre;
      }
    }
    return result;
  }
};

var totalNQueens = function(n) {
  // craete threaten table used to mark which grid are threatened.
  if (n < 1) return [];
  let row = new Array(n).fill(false);
  let threatened = [];
  for (let i = 0; i < n; i++) {
    threatened.push(row.slice());
  }
  return helper(threatened, 0);
};
