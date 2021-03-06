/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  let node;
  if (!t1 && !t2) {
    return null;
  } else if (t1 && !t2) {
    node = new TreeNode(t1.val);
    node.left = mergeTrees(t1.left, null);
    node.right = mergeTrees(t1.right, null);
  } else if (t2 && !t1) {
    node = new TreeNode(t2.val);
    node.left = mergeTrees(null, t2.left);
    node.right = mergeTrees(null, t2.right);
  } else {
    node = new TreeNode(t1.val + t2.val);
    node.left = mergeTrees(t1.left, t2.left);
    node.right = mergeTrees(t1.right, t2.right);
  }
  return node;
};
