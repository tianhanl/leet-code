/** 
 * Question 5
 * @param {string} s
 * @return {string}
 */

const extendPalindrome = function (s, left, right, low) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return {
    currLow: (left + 1),
    currLen: right - left - 1
  };
}

var longestPalindrome = function (s) {
  let length = s.length;
  let low = 0;
  let maxLength = 0;
  if (length < 2) return s;
  for (let i = 0; i < length - 1; i++) {
    let resOne = extendPalindrome(s, i, i);  //assume odd length, try to extend Palindrome as possible
    if (maxLength < resOne.currLen) {
      low = resOne.currLow;
      maxLength = resOne.currLen;
    }
    let resTwo = extendPalindrome(s, i, i + 1); //assume even length.
    if (maxLength < resTwo.currLen) {
      low = resTwo.currLow;
      maxLength = resTwo.currLen;
    }
  }
  return s.slice(low, low + maxLength)

};