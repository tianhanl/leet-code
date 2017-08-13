/**
 * Question 395
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const getFrequency = function(s) {
  let frequency = [];
  for (let i = 0; i < s.length; i++) {
    if (frequency.findIndex(element => element.key === s[i]) >= 0) {
      frequency.find(element => element.key === s[i]).count++;
    } else {
      frequency.push({
        key: s[i],
        count: 1
      });
    }
  }
  frequency.sort((a, b) => b.count - a.count);
  return frequency;
};

const helper = function(s, k, frequency) {
  if (!s) return 0;
  let curr = frequency.pop();
  if (curr.count >= k) {
    // since even the least frequent char appear k times
    return s.length;
  } else {
    let parts = s.split(curr.key).filter(element => element.length > 0);
    if (parts.length < 1) return 0;
    return Math.max(
      ...parts.map(element => helper(element, k, getFrequency(element)))
    );
  }
};

var longestSubstring = function(s, k) {
  if (k <= 1) return s.length;
  return helper(s, k, getFrequency(s));
};
