/**
 * Question 32
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      if (s[stack[stack.length - 1]] === '(') stack.pop();
      else stack.push(i);
    }
  }
  console.log(stack);
  if (stack.length === 0) {
    return s.length;
  }
  else {
    let max = 0;
    for (let i = 0; i < stack.length; i++) {
      if (i === 0) {
        if (stack[i] > 0) max = stack[i];
      } else {
        max = Math.max(stack[i] - 1 - stack[i - 1], max);
      }
    }
    max = Math.max(s.length - 1 - stack[stack.length - 1], max);
    return max;
  }
};