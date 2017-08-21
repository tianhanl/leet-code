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
    helper(node.left, result);
    result.push(node.val);
    helper(node.right, result);
  }
};

var inorderTraversalRecursive = function(root) {
  let result = [];
  helper(root, result);
  return result;
};

var inorderTraversalIterative = function(root) {
  let result = [];
  let current = root;
  let stack = [];
  while (current) {
    stack.push(current);
    current = current.left;
  }

  while (stack.length) {
    let current = stack.pop();
    result.push(current.val);
    if (current.right) {
      current = current.right;
      while (current) {
        stack.push(current);
        current = current.left;
      }
    }
  }
  return result;
};
