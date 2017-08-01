/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flattenHelper = function(root) {
  if (!root) return;
  let lhs = flattenHelper(root.left);
  let rhs = flattenHelper(root.right);
  if (lhs) {
    root.right = lhs;
    while (lhs.right) {
      lhs = lhs.right;
    }
    lhs.right = rhs;
  } else {
    root.right = rhs;
  }
  root.left = null;
  return root;
};

var flatten = function(root) {
  flattenHelper(root);
};
