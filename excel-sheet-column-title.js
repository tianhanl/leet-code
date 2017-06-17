/**
 * Question 168
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let result = [];
  let baseCode = 'A'.charCodeAt(0) - 1;
  while (n >= 1) {
    let curr = n % 26;
    if (curr === 0) curr = 26;
    curr += baseCode;
    result.push(String.fromCharCode(curr));
    n -= (curr - baseCode);
    n /= 26;
  }
  result.reverse();
  return result.join('');
};