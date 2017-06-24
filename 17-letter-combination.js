/**
 * @param {string} digits
 * @return {string[]}
 */

const table = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];

const prependTo = function (prefix) {
  return function (element) {
    return prefix + element;
  }
}

const helper = function (digits, count) {
  if (count === digits.length - 1) {
    return table[digits[count] - 2];
  } else {
    let rest = helper(digits, count + 1);
    let current = table[digits[count] - 2];
    let result = [];
    for (let i = 0; i < current.length; i++) {
      result = result.concat(rest.map(prependTo(current[i])));
    }
    return result;
  }
}

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  return helper(digits, 0);
};