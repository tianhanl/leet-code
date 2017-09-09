/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let result = [0];
  let offset = 1;
  // for each digit it measn 2^position;
  // when offset*2 === i, it means the number has move up one digit;
  // to advance another digit, the number has to go through offset's distance.
  for (let i = 1; i <= num; i++) {
    if (offset * 2 === i) offset *= 2;
    result[i] = result[i - offset] + 1;
  }
  return result;
};
