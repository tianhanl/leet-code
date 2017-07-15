/**
 * Question 90
 * @param {number[]} nums
 * @return {number[][]}
 */
const helper = function(prefix, nums, pos, results) {
    if (pos >= nums.length) {
        return;
    } else {
        let last;
        for (let i = pos; i < nums.length; i++) {
            if (nums[i] !== last) {
                prefix.push(nums[i]);
                last = nums[i];
                results.push(prefix.slice());
                helper(prefix, nums, i + 1, results);
                prefix.pop();
            }
        }
    }
}

var subsetsWithDup = function(nums) {
    let results = [
        []
    ];
    nums.sort();
    if (nums.length < 1) return results;
    helper([], nums, 0, results);
    return results;
};