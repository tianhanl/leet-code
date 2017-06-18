/** Question 3
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var set = new Set();
  var lhs = 0;
  var rhs = 0;
  var result = 0;
  while (lhs < s.length && rhs < s.length) {
    if (!set.has(s[rhs])) {
      set.add(s[rhs]);
      result = Math.max(result, rhs - lhs + 1);
      rhs += 1;
    } else {
      set.delete(s[lhs]);
      lhs++;
    }
  }

  return result;
};