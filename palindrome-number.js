/**
 * Question 9
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
  if (x < 10) return true;
  let rightHalf = 0;
  while (x > rightHalf) {
    rightHalf = rightHalf * 10 + x % 10; // append the last digit to rightHalf;
    x = Math.floor(x / 10); // delecte the last digit from the number;
  }
  return (x === rightHalf || x === Math.floor(rightHalf / 10)); // if x's length is even and if x's length is odd;
};