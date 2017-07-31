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
var minDepth = function (root) {
  const helper = function (node) {
    if (!node) return 0;
    let leftHeight = helper(node.left);
    let rightHeight = helper(node.right);
    if (leftHeight && rightHeight) {
      return Math.min(leftHeight, rightHeight) + 1;
    } else if (!leftHeight) {
      return rightHeight + 1;
    } else {
      return leftHeight + 1;
    }

  }
  return helper(root);
};