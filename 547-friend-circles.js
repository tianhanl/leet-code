/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
  let tracked = [];
  let count = 0;
  let length = M.length;
  const helper = function(x) {
    if (tracked[x]) return;
    else {
      tracked[x] = true;
      for (let i = 0; i < length; i++) {
        if (M[x][i]) {
          helper(i);
        }
      }
    }
  };
  for (let i = 0; i < length; i++) {
    if (!tracked[i]) count++;
    helper(i);
  }
  return count;
};
