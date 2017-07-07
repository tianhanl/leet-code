/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (grid.length <= 0 || grid[0].length <= 0) return 0;
  for (let i = grid.length - 2; i >= 0; i--) {
    grid[i][grid[0].length - 1] += grid[i + 1][grid[0].length - 1];
  }
  for (let i = grid[0].length - 2; i >= 0; i--) {
    grid[grid.length - 1][i] += grid[grid.length - 1][i + 1];
  }
  for (let i = grid.length - 2; i >= 0; i--) {
    for (let k = grid[0].length - 2; k >= 0; k--) {
      grid[i][k] += Math.min(grid[i + 1][k], grid[i][k + 1]);
    }
  }
  return grid[0][0];
};