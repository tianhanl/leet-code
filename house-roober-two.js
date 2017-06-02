/**
 * Question 213
 * @param {number[]} nums
 * @return {number}
 */

const maximumInRange = function (array, start, end) {
  var rangeLength = end - start;
  if (rangeLength < 0) return 0;
  var maximumForEachItem = (array.slice(start, end + 1)).concat([0, 0]);
  for (let i = rangeLength; i >= 0; i--) {
    maximumForEachItem[i] = Math.max(maximumForEachItem[i + 1], array[start + i] + maximumForEachItem[i + 2]);
  }
  return maximumForEachItem[0];
}

var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  return Math.max(maximumInRange(nums, 0, nums.length - 2), maximumInRange(nums, 1, nums.length - 1));
};