/**
 * Question 77
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ret = [];
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  const helper = function (prefix, remaining, currIndex) {
    // remember to use slice to make a shallow copy of the array
    // otherwise all values paseed into numbers will be refering 
    // same sequence of numberes.
    if (remaining === 0) ret.push(prefix.slice());
    for (let i = currIndex; i < numbers.length; i++) {
      prefix.push(numbers[i]);
      helper(prefix, remaining - 1, i + 1);
      prefix.pop();
    }
  }
  helper([], k, 0);
  return ret;
};