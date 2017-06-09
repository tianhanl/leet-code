/**
 * Solution to question 88
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let tempArr = [];
  let countM = 0;
  let countN = 0;

  while (countM < m || countN < n) {
    if (countM < m) {
      var currNumM = nums1[countM];
      if (countN < n) {
        currNumN = nums2[countN];
        if (currNumM < currNumN) {
          tempArr.push(currNumM);
          countM++;
        } else {
          tempArr.push(currNumN);
          countN++;
        }
      } else {
        tempArr.push(nums1[countM]);
        countM++;
      }
    } else {
      tempArr.push(nums2[countN]);
      countN++;
    }
  }

  for (let i = 0; i < tempArr.length; i++) {
    nums1[i] = tempArr[i];
  }
};