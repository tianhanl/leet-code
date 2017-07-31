/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
let helper = function (start, end, values) {
  if (start > end) return null;
  let mid = Math.floor((start + end) / 2);
  let node = new TreeNode(values[mid]);
  node.left = helper(start, mid - 1, values);
  node.right = helper(mid + 1, end, values);
  return node;
}

var sortedListToBST = function (head) {
  let values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  return helper(0, values.length - 1, values);
};