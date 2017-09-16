/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let curr = 0;
    let count = i;
    while (nums[count] >= 0) {
      curr++;
      let next = nums[count];
      nums[count] = -1;
      count = next;
    }
    max = Math.max(max, curr);
  }
  return max;
};
