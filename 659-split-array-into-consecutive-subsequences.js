/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  let frequency = new Map();
  let appendFrequency = new Map();

  // compute the frequency each number appear
  nums.forEach(element => {
    if (frequency.get(element)) {
      frequency.set(element, frequency.get(element) + 1);
    } else {
      frequency.set(element, 1);
    }
  });
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    if (frequency.get(element) === 0) {
      // the number has been used to construct a sequency
      continue;
    } else if (appendFrequency.get(element)) {
      // there is a sequency that we can append element to
      appendFrequency.set(element, appendFrequency.get(element) - 1);
      appendFrequency.set(
        element + 1,
        appendFrequency.get(element + 1)
          ? appendFrequency.get(element + 1) + 1
          : 1
      );
    } else if (frequency.get(element + 1) && frequency.get(element + 2)) {
      frequency.set(element + 1, frequency.get(element + 1) - 1);
      frequency.set(element + 2, frequency.get(element + 2) - 1);
      appendFrequency.set(
        element + 3,
        appendFrequency.get(element + 3)
          ? appendFrequency.get(element + 3) + 1
          : 1
      );
    } else {
      return false;
    }
    frequency.set(element, frequency.get(element) - 1);
  }
  return true;
};
