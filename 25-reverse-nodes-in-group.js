/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseListRange = function (head, end) {
  if (!head) return null;
  var nodeToAppend = end.next;
  while (head != end) {
    temp = head.next;
    head.next = nodeToAppend;
    nodeToAppend = head;
    head = temp;
  }
  head.next = nodeToAppend;
  return head;
};

var reverseKGroup = function (head, k) {
  if (!head) return null;
  if (k === 1) return head;
  let ret;
  let lhs = head;
  let rhs = head;
  let pre;
  let count = 1;
  while (rhs) {
    rhs = rhs.next;
    count++;
    if (count === k && rhs) {
      if (!ret) ret = rhs;
      let temp = rhs.next;
      reverseListRange(lhs, rhs);
      if (!pre) {
        pre = lhs;
      } else {
        pre.next = rhs;
        pre = lhs;
      }
      lhs = temp;
      rhs = temp;
      count = 1;
    }
  }
  if (!ret) ret = head;
  return ret;

};