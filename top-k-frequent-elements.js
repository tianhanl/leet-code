/**
 * Question 347
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var frequency = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (frequency.has(nums[i])) {
      frequency.set(nums[i], frequency.get(nums[i]) + 1);
    } else {
      frequency.set(nums[i], 1);
    }
  }

  var frequencyArray = [];

  frequency.forEach(function (value, key) {
    frequencyArray.push({ value: value, key: key });
  })
  frequencyArray.sort(function (lhs, rhs) {
    if (lhs.value < rhs.value) {
      return 1;
    } else if (lhs.value > rhs.value) {
      return -1;
    } else {
      return 0;
    }
  })
  frequencyArray = frequencyArray.slice(0, k);
  return frequencyArray.map(function (item) {
    return item.key;
  });
};