/**
 * Question 344
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  var result = '';
  var length = s.length;
  for (let i = length - 1; i >= 0; i--) {
    result += s.charAt(i);
  }
  return result;

};