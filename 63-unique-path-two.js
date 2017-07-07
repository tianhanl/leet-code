/**
 * Question 63
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  if (m === 0 || n === 0) return 0;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;
  obstacleGrid[m - 1][n - 1] = 1;
  for (let i = m - 2; i >= 0; i--) {
    if (obstacleGrid[i][n - 1] !== 1) {
      obstacleGrid[i][n - 1] += obstacleGrid[i + 1][n - 1]
    } else {
      obstacleGrid[i][n - 1] = 0;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (obstacleGrid[m - 1][i] !== 1) {
      obstacleGrid[m - 1][i] += obstacleGrid[m - 1][i + 1];
    } else {
      obstacleGrid[m - 1][i] = 0;
    }
  }
  for (let i = m - 2; i >= 0; i--) {
    for (let k = n - 2; k >= 0; k--) {
      if (obstacleGrid[i][k] !== 1) {
        obstacleGrid[i][k] += obstacleGrid[i + 1][k];
        obstacleGrid[i][k] += obstacleGrid[i][k + 1]
      } else {
        obstacleGrid[i][k] = 0;
      }
    }
  }
  return obstacleGrid[0][0];
};