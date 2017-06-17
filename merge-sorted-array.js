/**
 * Solution to question 88
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * This solution will run in O(n), but will use O(n) space
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

// Another solution using no extra space

const mergeBetter = function (nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums[m - 1] >= nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }

  if (n > 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
  }
};