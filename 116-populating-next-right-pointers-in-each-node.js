/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */

var connect = function(root) {
  if (!root || !root.left) return;
  let curr = root;
  curr.left.next = curr.right;
  pre = curr;
  curr = curr.next;
  while (curr) {
    pre.right.next = curr.left;
    curr.left.next = curr.right;
    pre = curr;
    curr = curr.next;
  }
  pre.right.next = null;
  connect(root.left);
};
