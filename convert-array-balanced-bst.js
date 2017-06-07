/**
 * Question 108
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const helper = function(nums) {
    if (nums.length === 0) return null;
    if (nums.length === 1) return new TreeNode(nums[0]);
    var mid = Math.floor((nums.length - 1) / 2);
    var root = new TreeNode(nums[mid]);
    root.left = helper(nums.slice(0, mid));
    root.right = helper(nums.slice(mid + 1, nums.length));
    return root;
}

var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) return null;
    return helper(nums);
};