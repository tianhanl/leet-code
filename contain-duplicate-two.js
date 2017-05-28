/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var NumInformation = function (value, index) {
  this.value = value;
  this.index = index;
};

var containsNearbyDuplicate = function (nums, k) {
  var copy = [];
  for (let i = 0; i < nums.length; i++) {
    copy.push(new NumInformation(nums[i], i));
  }
  copy.sort(function (a, b) {
    if (a.value < b.value) {
      return -1;
    } else if (a.value > b.value) {
      return 1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < copy.length - 1; i++) {
    if (copy[i].value === copy[i + 1].value &&
      Math.abs(copy[i].index - copy[i + 1].index) <= k) {
      return true;
    }
  }
  return false;
};