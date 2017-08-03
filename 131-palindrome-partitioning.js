/**
 * @param {string} s
 * @return {string[][]}
 */

const isPalindrome = function(string) {
  let lhs = 0;
  let rhs = string.length - 1;
  while (lhs < rhs) {
    if (string[lhs] !== string[rhs]) {
      return false;
    }
    lhs++;
    rhs--;
  }
  return true;
};

const helper = function(string, prefix, index, result) {
  if (index === string.length) {
    result.push(prefix.slice());
  } else {
    let fail = false;
    let curr = '';
    for (let i = index; i < string.length; i++) {
      curr += string[i];
      if (isPalindrome(curr)) {
        prefix.push(curr);
        helper(string, prefix, i + 1, result);
        prefix.pop();
      } else {
        fail = true;
      }
    }
  }
};

var partition = function(s) {
  let result = [];
  if (!s) return result;
  helper(s, [], 0, result);
  return result;
};
