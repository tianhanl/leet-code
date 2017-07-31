/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const helper = function (node, level, levels) {
  if (!node) return;
  if (!levels[level]) levels[level] = [];
  levels[level].push(node.val);
  helper(node.left, level + 1, levels);
  helper(node.right, level + 1, levels);
};

var levelOrderBottom = function (root) {
  var result = [];
  helper(root, 0, result);
  return result.reverse();
};