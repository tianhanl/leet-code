/**
 * Question 37
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const validate = function(board, x, y, val) {
  let row = x - x % 3,
    col = y - y % 3;
  for (let i = 0; i < 9; i++) {
    if (board[i][y] === val) return false;
    if (board[x][i] === val) return false;
    if (board[row + Math.floor(i / 3)][col + Math.floor(i % 3)] === val)
      return false;
  }
  return true;
};

const solve = function(board, x, y) {
  if (x === board.length) return true;
  if (y === board[0].length) return solve(board, x + 1, 0);
  if (board[x][y] !== '.') return solve(board, x, y + 1);
  let numbers = '123456789';
  for (let i = 0; i < numbers.length; i++) {
    if (validate(board, x, y, numbers[i])) {
      board[x][y] = numbers[i];
      if (solve(board, x, y + 1)) return true;
      board[x][y] = '.';
    }
  }
  return false;
};

var solveSudoku = function(board) {
  solve(board, 0, 0);
};
