/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let lhs = 0;
  let rhs = numbers.length - 1;
  while (lhs < rhs) {
    if (numbers[lhs] + numbers[rhs] === target) {
      break;
    } else if (numbers[lhs] + numbers[rhs] < target) {
      lhs++;
    } else {
      rhs--;
    }
  }
  return [lhs + 1, rhs + 1];
};
