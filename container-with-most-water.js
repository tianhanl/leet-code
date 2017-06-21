/**
 * Question 11
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let minHeight = 0;
  let lhs = 0;
  let rhs = height.length - 1;
  while (lhs < rhs) {
    minHeight = height[lhs] < height[rhs] ? height[lhs] : height[rhs];
    max = max < (minHeight * (rhs - lhs)) ? minHeight * (rhs - lhs) : max;
    while (height[lhs] <= minHeight && lhs < rhs) lhs++;
    while (height[rhs] <= minHeight && lhs < rhs) rhs--;
  }

  return max;
};