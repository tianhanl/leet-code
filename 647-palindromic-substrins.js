/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let palinLength = [];
  for (let i = 0; i < s.length + 1; i++) palinLength.push([]);
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let next = palinLength[i + 1];
    for (let j = 0; j < next.length; j++) {
      if (s[i + next[j] + 1] === s[i]) {
        palinLength[i].push(next[j] + 2);
        count++;
      }
    }
    // for each character, at least it self is a palindrome
    if (s[i] === s[i + 1]) {
      palinLength[i].push(2);
      count++;
    }
    palinLength[i].push(1);
    count++;
  }
  return count;
};
