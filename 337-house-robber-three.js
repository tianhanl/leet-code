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
var rob = function(root) {
  const helper = function(node) {
    if (!node) return [0, 0];
    let left = helper(node.left);
    let right = helper(node.right);
    let res = [];
    res.push(Math.max(left[0], left[1]) + Math.max(right[0], right[1]));
    res.push(node.val + left[0] + right[0]);
    return res;
  };
  return Math.max(...helper(root));
};
