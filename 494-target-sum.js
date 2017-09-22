/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let helper = function(index) {
    if (index === nums.length) {
      let result = new Map();
      result.set(0, 1);
      return result;
    } else {
      let previous = helper(index + 1);
      let result = new Map();
      for (let entry of previous.entries()) {
        if (result.has(entry[0] + nums[index])) {
          result.set(
            entry[0] + nums[index],
            result.get(entry[0] + nums[index]) + previous.get(entry[0])
          );
        } else {
          result.set(entry[0] + nums[index], previous.get(entry[0]));
        }

        if (result.has(entry[0] - nums[index])) {
          result.set(
            entry[0] - nums[index],
            result.get(entry[0] - nums[index]) + previous.get(entry[0])
          );
        } else {
          result.set(entry[0] - nums[index], previous.get(entry[0]));
        }
      }
      return result;
    }
  };
  let result = helper(0);
  return result.get(S) ? result.get(S) : 0;
};
