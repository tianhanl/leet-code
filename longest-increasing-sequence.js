/**
 * Question: 300
 * @param {number[]} nums
 * @return {number}
 * This problem can be solved using DP
 * Time limit O(n^2)
 */
var lengthOfLIS = function (nums) {
  // If nums is null or empty, return 0 since there will be no increasing subsequence
  if (!nums && nums.length === 0) return 0;

  let longestAt = [];
  let length = nums.length
  longestAt[length - 1] = 1;
  for (let i = length - 2; i >= 0; i--) {
    longestAt[i] = 1;
    let max = 0;
    for (let n = i + 1; n <= length - 1; n++) {
      if (nums[i] < nums[n]) {
        max = Math.max(max, longestAt[n]);
      }
    }
    longestAt[i] += max;
  }
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    longest = longestAt[i] > longest ? longestAt[i] : longest;
  }
  return longest;
};