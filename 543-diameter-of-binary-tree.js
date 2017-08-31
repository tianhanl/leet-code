/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let max = 0;
  const helper = function(node) {
    if (!node) return -1;
    let left = helper(node.left);
    let right = helper(node.right);
    max = Math.max(left + right + 2, max);
    return Math.max(left + 1, right + 1);
  };
  helper(root);
  return max;
};
