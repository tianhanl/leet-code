/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const helper = function(node, result) {
  if (!node) {
    return;
  } else {
    result.push(node.val);
    helper(node.left, result);
    helper(node.right, result);
  }
};

var preorderTraversal = function(root) {
  let result = [];
  helper(root, result);
  return result;
};
