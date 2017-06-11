/**
 * @param {number[]} digits
 * @return {number[]}
 * Question 66
 */


var plusOne = function (digits) {
  let currentPosition = digits.length - 1;
  digits[currentPosition] += 1;
  while (digits[currentPosition] > 9 && currentPosition > 0) {
    digits[currentPosition] = 0;
    currentPosition--;
    digits[currentPosition] += 1;
  }
  if (digits[0] > 9) {
    digits.unshift(1);
    digits[1] = 0;
  }
  return digits;
};