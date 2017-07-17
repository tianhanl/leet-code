/**
 * Question 83
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
  let ret = head;
  let rhs = head;
  while (head) {
    if (head.next && head.next.val === head.val) {
      let rhs = head.next;
      while (rhs && rhs.val === head.val) {
        rhs = rhs.next;
      };
      head.next = rhs;
      head = rhs;
    } else {
      head = head.next;
    }

  }
  return ret;
};