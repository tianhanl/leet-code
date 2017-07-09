/**
 * Question 41
 * @param {number[]} nums
 * @return {number}
 */

// swap the items at indexA and indexB of list in-place
const swap = function (list, indexA, indexB) {
  let temp = list[indexA];
  list[indexA] = list[indexB];
  list[indexB] = temp;
}

var firstMissingPositive = function (nums) {
  let count = 0;
  // swap numbers until nums be like nums[0] = 1, nums[1] = 2, etc.
  while (count < nums.length) {
    if (nums[count] != count + 1 // if the item at place count is not count+1
      && nums[count] > 0 && nums[count] < nums.length // the index the item points to is within this array
      && nums[count] !== nums[nums[count] - 1]) { // when they point to same index, that will casue deaklock
      swap(nums, count, nums[count] - 1);
    } else {
      count++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) return i + 1;
  }
  return nums.length + 1;
};