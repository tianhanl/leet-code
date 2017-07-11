/**
 * Question 42
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length <= 2) return 0;
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  let maxLeft = 0;
  let maxRight = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) maxLeft = height[left];
      else result += maxLeft - height[left];
      left++;
    } else {
      if (height[right] >= maxRight) maxRight = height[right];
      else result += maxRight - height[right];
      right--;
    }
  }
  return result;

};