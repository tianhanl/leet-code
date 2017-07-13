/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const helper = function(remaining, prefix, results, count) {
    if (count === 0) {
        results.push(prefix.slice());
    } else {
        for (let i = 0; i < remaining.length; i++) {
            if (i > 0 && remaining[i - 1] === remaining[i]) {
                continue;
            } else {
                prefix.push(remaining[i]);
                helper(remaining.slice(0, i).concat(remaining.slice(i + 1, remaining.length)), prefix, results, count - 1);
                prefix.pop();
            }
        }
    }
}

var permuteUnique = function(nums) {
    if (nums.length <= 1) return [nums];
    let results = [];
    nums.sort();
    helper(nums, [], results, nums.length);
    return results;
};