/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// Since the orignal tree is a BST, the nodes are larger than it are
// 1. from its paretn to its right for left node
// 2. from its right for the right node
var convertBST = function(root) {
  let sum = 0;
  const reverseTraverse = function(node) {
    if (!node) return;
    reverseTraverse(node.right);
    // for middle nodes all the keys larger than itself is on its right;
    node.val += sum;
    sum = node.val;
    // for left nodes the largerkeys are keys from its parent and parents's right to its right;
    reverseTraverse(node.left);
  };
  reverseTraverse(root);
  return root;
};
