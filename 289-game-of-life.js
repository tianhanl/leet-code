/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var gameOfLife = function(board) {
  if (!board || !board[0]) return;
  const checkNeighbors = function(x, y) {
    let count = 0;
    if (board[x - 1]) {
      if (board[x - 1][y - 1]) count++;
      if (board[x - 1][y]) count++;
      if (board[x - 1][y + 1]) count++;
    }

    if (board[x + 1]) {
      if (board[x + 1][y - 1]) count++;
      if (board[x + 1][y]) count++;
      if (board[x + 1][y + 1]) count++;
    }

    if (board[x][y - 1]) count++;
    if (board[x][y + 1]) count++;
    return count;
  };
  let changes = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let neighbors = checkNeighbors(i, j);
      if (board[i][j]) {
        if (neighbors < 2 || neighbors > 3) {
          changes.push([i, j]);
        }
      } else {
        if (neighbors === 3) {
          changes.push([i, j]);
        }
      }
    }
  }

  for (let change of changes) {
    board[change[0]][change[1]] = board[change[0]][change[1]] ? 0 : 1;
  }
};
