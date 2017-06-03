/**
 * question 101
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const helper = function (lhs, rhs) {
  if (lhs === null && rhs === null) return true;
  if (lhs === null || rhs === null) return false;
  if (lhs.val !== rhs.val) return false;
  return helper(lhs.left, rhs.right) && helper(lhs.right, rhs.left);
}

var isSymmetric = function (root) {
  return root === null || helper(root.left, root.right);
};