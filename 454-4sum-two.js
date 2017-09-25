/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  if (!A || !A.length) return 0;
  let count = 0;
  let map = new Map();
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (map.has(A[i] + B[j])) {
        map.set(A[i] + B[j], map.get(A[i] + B[j]) + 1);
      } else {
        map.set(A[i] + B[j], 1);
      }
    }
  }
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      if (map.has(-C[i] - D[j])) {
        count += map.get(-C[i] - D[j]);
      }
    }
  }

  return count;
};
