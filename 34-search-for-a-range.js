/**
 * Question 34
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const binaryFind = function (nums, lhs, rhs, validator) {
  if (lhs > rhs) return -1;
  let mid = Math.floor((lhs + rhs) / 2);
  if (validator(mid) === 0) return mid;
  else if (validator(mid) === 1) return binaryFind(nums, mid + 1, rhs, validator);
  else return binaryFind(nums, lhs, mid - 1, validator);
}

var searchRange = function (nums, target) {
  let pivot = binaryFind(nums, 0, nums.length, function (location) {
    if (nums[location] === target) return 0;
    else if (nums[location] < target) return 1;
    else return -1;
  })
  if (pivot === -1) return [-1, -1];
  else {
    let left = binaryFind(nums, 0, pivot, function (location) {
      if (nums[location] === target) {
        if (nums[location - 1] !== target) return 0;
        else return -1;
      } else {
        return 1;
      }
    });

    let right = binaryFind(nums, pivot, nums.length, function (location) {
      if (nums[location] === target) {
        if (nums[location + 1] !== target) return 0;
        else return 1;
      } else {
        return -1;
      }
    });

    return [left, right];
  }
};