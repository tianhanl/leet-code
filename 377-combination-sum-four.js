/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  nums.sort((a, b) => a - b);
  let numbers = new Array(target + 1).fill(0);
  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (num > i) break;
      else if (num === i) numbers[i] += 1;
      else numbers[i] += numbers[i - num];
    }
  }
  console.log(numbers);
  return numbers[target];
};
