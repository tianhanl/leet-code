/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.next = null;
 *     this.val = val;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// using extra space
var detectCycle = function(head) {
  if (!head) return null;
  let path = new Set();
  path.add(head);
  while (head.next !== null) {
    if (path.has(head.next)) return head.next;

    path.add(head.next);
    head = head.next;
  }
  return null;
};
