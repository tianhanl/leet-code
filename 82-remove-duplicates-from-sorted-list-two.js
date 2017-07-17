/**
 * Question 82
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
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let ret = null;
  let lhs = null;
  while (head) {
    if (head.next && head.val === head.next.val) {
      let curr = head.val;
      while (head && head.val === curr) {
        head = head.next;
      }
    } else {
      if (!ret) {
        ret = head;
        lhs = head;

      } else {
        lhs.next = head;
        lhs = lhs.next;
      }
      head = head.next;
    }
  }
  if (lhs) lhs.next = null;
  return ret;
};