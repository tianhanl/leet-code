/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    // incase the index to used has been change to negative
    let index = Math.abs(nums[i]) - 1;
    nums[index] = Math.min(-nums[index], nums[index]);
  }
  let result = [];
  nums.forEach((element, index) => {
    if (element > 0) {
      result.push(index + 1);
    }
  });
  return result;
};
