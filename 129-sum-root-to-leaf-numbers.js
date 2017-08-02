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
var sumNumbers = function(root) {
  let sum = 0;
  const helper = function(node, prefix) {
    if (!node) {
      return;
    } else if (!node.left && !node.right) {
      sum += Number.parseInt(prefix + node.val, 10);
    } else {
      prefix += node.val;
      helper(node.left, prefix);
      helper(node.right, prefix);
    }
  };
  helper(root, "");
  return sum;
};
