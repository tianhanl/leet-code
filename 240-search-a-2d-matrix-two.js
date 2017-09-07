/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
  const helper = function(lhsX, rhsX, lhsY, rhsY) {
    if (lhsX > rhsX || lhsY > rhsY) return false;
    let midX = Math.floor((lhsX + rhsX) / 2);
    let midY = Math.floor((lhsY + rhsY) / 2);
    if (matrix[midX][midY] === target) {
      return true;
    } else {
      if (matrix[midX][midY] < target) {
        return (
          helper(midX + 1, rhsX, lhsY, rhsY) ||
          helper(lhsX, midX, midY + 1, rhsY)
        );
      } else {
        return (
          helper(lhsX, midX - 1, lhsY, rhsY) ||
          helper(midX, rhsX, lhsY, midY - 1)
        );
      }
    }
  };
  return helper(0, matrix.length - 1, 0, matrix[0].length - 1);
};
