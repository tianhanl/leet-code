/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const helper = function(node, currSum, target) {
  if (!node) return false;
  if (!node.left && !node.right) {
    currSum += node.val;
    if (currSum === target) return true;
    return false;
  } else {
    let leftResult = helper(node.left, currSum + node.val, target);
    let rightResult = helper(node.right, currSum + node.val, target);
    return leftResult || rightResult;
  }
};
var hasPathSum = function(root, sum) {
  return helper(root, 0, sum);
};
