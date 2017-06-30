/**
 * Question 28
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; ; i++) {
    for (let n = 0; ; n++) {
      if (n === needle.length) return i;
      if (i + n === haystack.length) return -1;
      if (needle[n] != haystack[i + n]) break;
    }
  }
};