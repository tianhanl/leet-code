/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let result = [];
  people.sort((lhs, rhs) => {
    if (lhs[1] < rhs[1]) {
      return -1;
    } else if (lhs[1] > rhs[1]) {
      return 1;
    } else {
      return 0;
    }
  });
  for (let person of people) {
    let count = person[1];
    let pos = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i][0] >= person[0]) {
        if (count > 0) {
          count--;
          if (i === result.length - 1) pos = i + 1;
        } else {
          pos = i;
          break;
        }
      } else {
        pos++;
        if (i === result.length - 1) pos = i + 1;
      }
    }
    result.splice(pos, 0, person);
  }
  return result;
};
