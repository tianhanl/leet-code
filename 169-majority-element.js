/**
 * @param {number[]} nums
 * @return {number}
 */
// Since the majority appear more than n/2 times, for either half of the the set, it must appear more than halft time.
// Thus, we can use divide and conquer to find out the elements that appear more than half time in either half.
// initial version, slow and use O(N) space
var majorityElement = function(nums) {
  let frequency = new Map();
  let currMax = nums[0];
  nums.forEach(element => {
    if (frequency.has(element)) {
      frequency.set(element, frequency.get(element) + 1);
      if (
        currMax !== element &&
        frequency.get(currMax) < frequency.get(element)
      )
        currMax = element;
    } else {
      frequency.set(element, 1);
    }
  });
  return currMax;
};
// improved one learned from other codes provides in more details section
var majorityElementBetter = function(nums) {
  let major = nums[0];
  let count = 0;
  nums.forEach(element => {
    if (count === 0) major = element;
    if (element === major) count++;
    else count--;
  });
  return major;
};
