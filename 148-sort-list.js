/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Accepted with merge sort
var sortList = function(head) {
  let length = 0;
  let curr = head;
  const helper = function(start, end, node) {
    if (start === end) {
      return node;
    } else {
      let mid = Math.floor((start + end) / 2);
      let middle = node;
      let count = start;
      while (count < mid) {
        middle = middle.next;
        count++;
      }
      let next = middle.next;
      middle.next = null;
      let lhs = helper(start, mid, node);
      let rhs = helper(mid + 1, end, next);
      let result;
      if (lhs.val < rhs.val) {
        result = lhs;
        lhs = lhs.next;
      } else {
        result = rhs;
        rhs = rhs.next;
      }
      let ret = result;
      while (lhs || rhs) {
        if (!lhs && rhs) {
          result.next = rhs;
          rhs = rhs.next;
          result = result.next;
        } else if (lhs && !rhs) {
          result.next = lhs;
          lhs = lhs.next;
          result = result.next;
        } else {
          if (lhs.val < rhs.val) {
            result.next = lhs;
            lhs = lhs.next;
            result = result.next;
          } else {
            result.next = rhs;
            rhs = rhs.next;
            result = result.next;
          }
        }
      }
      return ret;
    }
  };
  while (curr) {
    length++;
    curr = curr.next;
  }
  if (length <= 1) return head;
  return helper(0, length - 1, head);
};
