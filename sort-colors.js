/**
 * Question 75
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var numOfZero = 0;
    var numOfOne = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) numOfZero++;
        else if (nums[i] === 1) numOfOne++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (numOfZero) {
            nums[i] = 0;
            numOfZero--;
        } else if (numOfOne) {
            nums[i] = 1;
            numOfOne--;
        } else {
            nums[i] = 2;
        }
    }
};