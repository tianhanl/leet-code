/**
 * Question 20
 * @param {string} s
 * @return {boolean}
 */


var isValid = function (s) {

  var stack = [];
  for (let i = 0; i < s.length; i++) {
    let character = s.charAt(i);
    if (character === '(' || character === '{' || character === '[') {
      stack.push(character);
    } else {
      let prevElem = stack.pop();
      if (character === ')') {
        if (prevElem === '(') {
          continue;
        } else {
          return false;
        }
      } else if (character === '}') {
        if (prevElem === '{') {
          continue;
        } else {
          return false;
        }
      } else {
        if (prevElem === '[') {
          continue;
        } else {
          return false;
        }
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};