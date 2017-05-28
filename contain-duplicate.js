/**
* Question 217 
* @param {number[]} nums
* @return {boolean}
*/
var containsDuplicate = function (nums) {
  nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) return true;
  }
  return false;
};

// time complexity log(n)n for sorting, n for looping
// eventually nlog(n)

// notice from editorial: Using sorting will changed the original array, which
// may be problematic side-effect.


// another way to implement this can be using dynamic data structure like
// hashtable; however, when the input is not large enough, using hashtable can
// be slower than using sorting due to the overhead.

var containsDuplicateHash = function (nums) {
  var set = new Set(); // creating a set
  for (var num in nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}