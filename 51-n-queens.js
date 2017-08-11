/**
 * @param {number} n
 * @return {string[][]}
 * This solution is really slow, need improvement
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

const helper = function(board, threatened, row, results) {
  if (row === board.length) {
    results.push(board.map(element => element.join('')));
    return;
  } else {
    for (let i = 0; i < board.length; i++) {
      if (!threatened[row][i]) {
        board[row][i] = 'Q';
        let pre = threatened.map(element => element.slice());
        setThreatened(threatened, row, i);
        helper(board, threatened, row + 1, results);
        threatened = pre;
        board[row][i] = '.';
      }
    }
  }
};

var solveNQueens = function(n) {
  // craete threaten table used to mark which grid are threatened.
  if (n < 1) return [];
  let results = [];
  let row = new Array(n).fill(false);
  let threatened = [];
  for (let i = 0; i < n; i++) {
    threatened.push(row.slice());
  }
  let board = [];
  row = new Array(n).fill('.');
  for (let i = 0; i < n; i++) {
    board.push(row.slice());
  }
  helper(board, threatened, 0, results);
  return results;
};
