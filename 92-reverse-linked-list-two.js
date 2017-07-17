/**
 * Question 92
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

var reverseBetween = function (head, m, n) {
  if (!head) return null;
  if (m === n) return head;
  var nodeToAppend = null;
  let ret = head;
  let count = 1;
  let pre;
  let start;
  let end;
  while (count < n) {
    if (count < m) {
      pre = head;
      head = head.next;
    } else {
      if (count === m) start = head;
      temp = head.next;
      head.next = nodeToAppend;
      nodeToAppend = head;
      head = temp;
      end = head.next;
    }
    count++;
  }
  head.next = nodeToAppend;
  start.next = end;
  if (m !== 1) {
    pre.next = head;
  } else {
    ret = head;
  }
  return ret;
}