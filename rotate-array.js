/**
 * Rotate Array
 * @param number nums The array of numbers
 * @param number k The the steps to rotate
 * @return none, do it in place
 */

module.exports.rotateArrayExtra = function(nums, k) {
    k = k % nums.length;
    let temp = [];
    for (let i = nums.length - k; i < nums.length; i++) {
        temp.push(nums[i]);
    }
    for (let i = 0; i < nums.length - k; i++) {
        temp.push(nums[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];
    }
};
// it will pass through the array for two times = 2n
// time complexity = O(n), space complexity = O(n)

const reverseBetween = function(array, lhs, rhs) {
    if (lhs >= rhs || (lhs < 0 || rhs < 0)) return;

    while (lhs <= rhs) {
        if (lhs === rhs) return;
        let temp = array[lhs];
        array[lhs] = array[rhs];
        array[rhs] = temp;
        lhs++;
        rhs--;
    }
};

module.exports.rotateArrayReverse = function(nums, k) {
    k = k % nums.length;
    nums.reverse();
    reverseBetween(nums, 0, k - 1);
    reverseBetween(nums, k, nums.length - 1);

};