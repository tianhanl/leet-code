/**
 * Question 98
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

var isValidBST = function (root) {
  if (!root) return true;
  let stack = [];
  let pre = null;
  let current = root;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    if (pre && (current.val <= pre.val)) return false;
    pre = current;
    current = current.right;
  }
  return true;

}