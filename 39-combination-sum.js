/*
 *  39
 *   @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const helper = function (values, prefix, remaining, solutions, level) {
    if (remaining === 0) {
        solutions.push(prefix);
    } else {
        // for each solution, if the smallest item have been choosed, the remaining solution will come from either
        // the larger or the same item.
        for (let i = level; i < values.length; i++) {
            // if values[i] is larger than remaining, it must not be a solution.
            if (remaining >= values[i]) {
                helper(values, prefix.concat([values[i]]), remaining - values[i], solutions, i);
            }
        }
    }
};

var combinationSum = function (candidates, target) {
    var solutions = [];
    helper(candidates, [], target, solutions, 0);
    return solutions;
};