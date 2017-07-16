/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
/**
 * Question 33
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = function (nums, l, r, target) {
  if (l > r) return -1;
  let mid = Math.floor((l + r) / 2);
  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return binarySearch(nums, mid + 1, r, target);
  } else {
    return binarySearch(nums, l, mid - 1, target);
  }

}

var search = function (nums, target) {
  let pivot = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      pivot = i;
      break;
    }
  }
  let indexA = binarySearch(nums, 0, pivot, target);
  let indexB = binarySearch(nums, pivot + 1, nums.length, target);
  return (indexA >= 0 || indexB >= 0) ? true : false;

};