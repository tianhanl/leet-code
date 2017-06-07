/**
 * Question 238
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var result = [];
    var productOfLeft = 1;
    var productOfRight = 1;
    var length = nums.length;
    for (let i = 0; i < length; i++) {
        if (result[i] !== 0 && !result[i]) result[i] = 1;
        result[i] *= productOfLeft;
        productOfLeft *= nums[i];
        if (result[length - i - 1] !== 0 && !result[length - i - 1]) result[length - i - 1] = 1;
        result[length - i - 1] *= productOfRight;
        productOfRight *= nums[length - i - 1];
    }
    return result;
};