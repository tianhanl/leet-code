/** Question 268
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var expectedSum = 0;
  var actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    expectedSum += i;
    actualSum += nums[i];
  }
  expectedSum += nums.length;
  return expectedSum - actualSum;
};