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
var maxPathSum = function(root) {
  let retMax = -Number.MAX_VALUE;
  const helper = function(node) {
    if (node === null) return 0;
    let left = Math.max(0, helper(node.left));
    let right = Math.max(0, helper(node.right));
    retMax = Math.max(retMax, left + right + node.val);
    return Math.max(left, right) + node.val;
  };
  helper(root);
  return retMax;
};
