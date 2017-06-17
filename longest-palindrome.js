/**
 * Question 409
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var set = new Set();
    var result = 0;
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            result += 2;
            set.delete(s[i]);
        } else {
            set.add(s[i]);
        }
    }
    if (result % 2 === 0) {
        if (set.size > 0) result++;
    }
    return result;
};