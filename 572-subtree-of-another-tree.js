/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  const helper = function(lhs, rhs, parent) {
    if (!lhs && !rhs) return true;
    if (!lhs || !rhs) return false;
    if (lhs.val === rhs.val) {
      return (
        (helper(lhs.left, rhs.left, lhs) &&
          helper(lhs.right, rhs.right, lhs)) ||
        helper(lhs.left, rhs) ||
        helper(lhs.right, rhs)
      );
    } else {
      if (parent) {
        return false;
      } else {
        return helper(lhs.left, rhs, null) || helper(lhs.right, rhs, null);
      }
    }
  };
  return helper(s, t, null);
};
