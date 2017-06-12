/** Question 287
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  if (nums.length < 2) return -1;
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;
  while (fast != slow) {
    fast = nums[fast];
    slow = nums[slow];
  }
  return slow;
};