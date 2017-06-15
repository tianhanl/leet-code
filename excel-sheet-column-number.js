/** 
 * Question 171
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  var baseCode = 'A'.charCodeAt(0) - 1;
  var result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    result += (s.charCodeAt(i) - baseCode) * Math.pow(26, s.length - 1 - i);
  }
  return result;

};