/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
  let count = 0;
  let current = root;
  let stack = [];
  while (current) {
    stack.push(current);
    current = current.left;
  }

  while (stack.length) {
    let current = stack.pop();
    count++;
    if (count === k) return current.val;
    if (current.right) {
      current = current.right;
      while (current) {
        stack.push(current);
        current = current.left;
      }
    }
  }
};
