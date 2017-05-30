/**
 * Question 26
 * @param {number[]} nums
 * @return {number}
 */
module.exports.removeDuplicates = function(nums) {
    let currentPosition = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[currentPosition]) {
            currentPosition++;
            nums[currentPosition] = nums[i];
        }
    }
    nums.splice(currentPosition, nums.length - currentPosition - 1);
    return nums.length;

};