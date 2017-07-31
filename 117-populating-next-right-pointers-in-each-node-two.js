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
  if (!root) return;
  let curr = root;
  let pre;
  let start;
  while (curr.next && !curr.left && !curr.right) {
    curr = curr.next;
  }
  if (curr.left) {
    start = curr.left;
    if (curr.right) {
      curr.left.next = curr.right;
      pre = curr.right;
    } else {
      pre = curr.left;
    }
  } else if (curr.right) {
    start = curr.right;
    pre = curr.right;
  }
  curr = curr.next;
  while (curr) {
    if (curr.left) {
      pre.next = curr.left;
      pre = curr.left;
      if (curr.right) {
        pre.next = curr.right;
        pre = curr.right;
      }
    } else if (curr.right) {
      pre.next = curr.right;
      pre = curr.right;
    }
    curr = curr.next;
  }

  connect(start);
};
