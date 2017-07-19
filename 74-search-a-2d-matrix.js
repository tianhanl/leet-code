/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const binarySearch = function (array, target, left, right) {
  if (left > right) {
    return -1;
  } else {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      return binarySearch(array, target, left, mid - 1);
    } else {
      return binarySearch(array, target, mid + 1, right);
    }
  }
}

var searchMatrix = function (matrix, target) {
  if (matrix.length < 1 || matrix[0].length < 1) return false;
  let array = [].concat(...matrix);
  return binarySearch(array, target, 0, array.length) !== -1;
};