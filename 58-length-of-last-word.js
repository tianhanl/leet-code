/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;
  let index = s.length - 1;
  while (index >= 0) {
    if (s[index] === ' ') {
      if (count === 0) {
      } else {
        break;
      }
    } else {
      count++;
    }
    index--;
  }
  return count;
};