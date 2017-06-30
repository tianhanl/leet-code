/**
 * Question 40
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * This problem can be solved with DP?
 * The array will be array[target], stores all the prefix that
 * can achieve i.
 * When a element is added to a prefix of array[i], if will be removed
 * from the candidates set.
 */

const helper = function (values, prefix, remaining, solutions) {
  if (remaining === 0) {
    solutions.push(prefix);
  } else {
    for (let i = 0; i < values.length; i++) {
      if (values[i] === values[i - 1]) continue;
      if (values[i] <= remaining) {
        helper(values.slice(i + 1, values.length), prefix.concat([values[i]]), remaining - values[i], solutions);
      }
    }
  }
}

var combinationSum2 = function (candidates, target) {
  if (candidates.length <= 0) return [];
  let solutions = [];
  candidates.sort();
  helper(candidates, [], target, solutions);
  return solutions;
};