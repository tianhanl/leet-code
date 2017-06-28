/**
 * Question 22
 * @param {number} n
 * @return {string[]}
 */

const helper = function (s, l, r, result) {
  if (l) helper(s + '(', l - 1, r, result);
  if (r > l) helper(s + ')', l, r - 1, result);
  if (!r) result.push(s);
  return result;
}

var generateParenthesis = function (n) {
  return helper('', n, n, []);
};