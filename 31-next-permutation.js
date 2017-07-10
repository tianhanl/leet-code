/**
 * Question 31
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead. This
 * solution is based on the observation that: For a sequence of number in
 * descending number, it is impossible to swap to create a sequence larger than
 * it, since swap between two of its member will put a smaller number on the
 * more meaningful digit.
 * 
 * First, we find a pair of number form the right such that it satisfies number[i] < numbers[i+1]; It means that all numbers behind that pair of numbers are in descending order.
 * Then, we can simply swap the two number to create a larger number
 * Since we are finding the next larger permutation, by reverse the elements after that pair of number, the elements behind will be in ascending order.
 */
// swap the itesm  at index a, b in place
const swap = function (nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}


const reversePart = function (array, lhs, rhs) {
  while (lhs < rhs) {
    if (lhs != rhs) {
      let temp = array[lhs];
      array[lhs] = array[rhs];
      array[rhs] = temp;
      lhs++;
      rhs--;
    } else {
      lhs++;
      rhs--;
    }
  }
}

/**
* Find the largest index k such that nums[k] < nums[k + 1]. If no such index exists, the permutation is sorted in descending order, just reverse it to ascending order and we are done. For example, the next permutation of [3, 2, 1] is [1, 2, 3].
Find the largest index l greater than k such that nums[k] < nums[l].
Swap the value of nums[k] with that of nums[l].
Reverse the sequence from nums[k + 1] up to and including the final element nums[nums.size() - 1].

*/

var nextPermutation = function (nums) {
  if (nums.length <= 1) return;
  let lhs;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      lhs = i;
      break;
    }
  }
  if (!lhs && lhs != 0) {
    // If there is no pairs of number such that nums[i] < nums[i+1]
    // the array is in descending order.
    nums.reverse();
    return;
  }
  let rhs;
  for (let i = nums.length - 1; i > lhs; i--) {
    if (nums[i] > nums[lhs]) {
      rhs = i;
      break;
    }
  }
  // no fallback, since there is at least one element that is larger than lhs
  swap(nums, lhs, rhs);
  reversePart(nums, lhs + 1, nums.length - 1);
};