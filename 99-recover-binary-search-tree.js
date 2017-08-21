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
var recoverTree = function(root) {
  let result = [];
  let current = root;
  let stack = [];
  let first, second;
  while (current) {
    stack.push(current);
    current = current.left;
  }

  while (stack.length) {
    let current = stack.pop();
    result.push(current);
    if (current.right) {
      current = current.right;
      while (current) {
        stack.push(current);
        current = current.left;
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (!first) {
      if (i - 1 >= 0 && result[i].val < result[i - 1].val) {
        first = result[i];
      }
      if (i + 1 < result.length && result[i].val > result[i + 1].val) {
        first = result[i];
      }
    } else {
      if (i - 1 >= 0 && result[i].val < result[i - 1].val) {
        second = result[i];
      }
      if (i + 1 < result.length && result[i].val > result[i + 1].val) {
        second = result[i];
      }
    }
  }
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
};
