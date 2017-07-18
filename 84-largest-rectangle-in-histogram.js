/**
 * Question 84
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  if (heights.length < 1) return 0;
  if (heights.length === 1) return heights[0];

  // In all cases, first height will be larger than undefined
  // stack will store the indexes of heights
  let stack = [0];
  let max = 0;
  // add the dummy height to force pop last height.
  heights.push(0);
  for (let i = 1; i < heights.length; i++) {
    // If curren row is increasing, EX. 1,2,3,4
    if (heights[stack[stack.length - 1]] < heights[i]) {
      stack.push(i)
    } else {
      while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
        let curr = stack.pop();
        let currHeight = heights[curr];
        // For rectangles with same height, the leftmost one will be largest
        // Therefore, it only needs to check the leftmost one for max.
        while (heights[stack[stack.length - 1]] === currHeight) {
          curr = stack.pop();
        }
        // If left elements are larger than currHeight, they can also be a part of curr rectangle
        while (curr > 0 && heights[curr - 1] >= currHeight) {
          curr--;
        }
        max = Math.max(max, currHeight * (i - curr));
      }
      stack.push(i);
    }
  }

  return max;
};