/**
 * @param {number[]} nums
 * @return {number[][]}
 */



var permute = function(nums) {
    if (nums.length <= 1) return [nums];
    let results = [];
    const helper = function(prefix) {
        if (prefix.length === nums.length) {
            results.push(prefix.slice(0));
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (prefix.indexOf(nums[i]) !== -1) continue;
                else {
                    prefix.push(nums[i]);
                    helper(prefix);
                    prefix.pop();
                }
            }
        }
    }
    helper([]);
    return results;

};