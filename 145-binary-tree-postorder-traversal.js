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
// accepted but slow
var postorderTraversal = function(root) {
  let result = [];
  let stack = [];
  let curr = root;
  while (curr) {
    stack.push(curr);
    curr = curr.left;
  }
  while (stack.length) {
    let current = stack.pop();
    if (current.right) {
      stack.push(current);
      let temp = current.right;
      current.right = null;
      current = temp;
      while (current) {
        stack.push(current);
        current = current.left;
      }
    } else {
      result.push(current.val);
    }
  }
  return result;
};

// better version, reduced lopping
var postorderTraversalBetter = function(root) {
  var current = root;
  var stack = [];
  var res = [];
  while (current !== null || stack.length !== 0) {
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else {
      var temp = stack[stack.length - 1].right;
      if (temp === null) {
        temp = stack.pop();
        res.push(temp.val);
        while (stack.length > 0 && temp === stack[stack.length - 1].right) {
          temp = stack.pop();
          res.push(temp.val);
        }
      } else {
        current = temp;
      }
    }
  }
  return res;
};
