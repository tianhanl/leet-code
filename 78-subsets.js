/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const helper = function(prefix, pos, nums, results) {
    if (pos >= nums.length) {
        return;
    }

    for (let i = pos; i < nums.length; i++) {
        prefix.push(nums[i]);
        results.push(prefix.slice());
        helper(prefix, i + 1, nums, results);
        prefix.pop(); 
    };
}

var subsets = function(nums) { 
    let results = [
        []
    ];
    if (nums.length < 1) return results;
    helper([], 0, nums, results);
    return results;
};