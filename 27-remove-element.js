/** 
 * Question 27
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  nums.sort();
  let count = 0;
  let index = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      if (index === null) index = i;
      count++;
    }
  }
  nums.splice(index, count);
};