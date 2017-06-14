/** question 162
 * @param {number[]} nums
 * @return {number}
 * since both nums[n-1] === nums[-1] = -infinite,
 * if nums[i]<nums[i+1], there must be a peak from nums[i+1]
 * to nums[lengths-1]. 
 * Prove:
 * Every element from i+1 to length-1 is not a peak. Then the loop
 * must walk to the last index, i.e, nums[n-2] < nums[n-1]. Since 
 * nums[n-1] > nums[n], it is a peak. 
 * 
 */


var findPeakElement = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] < nums[mid + 1]) low = mid + 1;
    else high = mid;
  }
  return low;
};