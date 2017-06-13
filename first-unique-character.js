/**
 * Question 387
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (s.length < 1) return -1;
  if (s.length === 1) return 0;
  var frequency = {};
  for (let i = 0; i < s.length; i++) {
    if (frequency[s[i]]) {
      frequency[s[i]]++;
    } else {
      frequency[s[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (frequency[s[i]] === 1) return i;
  }
  return -1;
};