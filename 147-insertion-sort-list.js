/**
 * Question 147
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

// insert the node after head in-place
const insert = function(head, node) {
  let temp = head.next;
  head.next = node;
  node.next = temp;
};

var insertionSortList = function(head) {
  if (!head) return head;
  let curr = head.next;
  let ret = head;
  ret.next = null;
  while (curr) {
    let pre = null;
    let current = ret;
    let next = curr.next;
    while (current) {
      if (current.next === null) {
        if (current.val < curr.val) {
          insert(current, curr);
        } else {
          if (!pre) {
            curr.next = ret;
            ret = curr;
          } else {
            insert(pre, curr);
          }
        }
        break;
      } else if (current.val === curr.val) {
        insert(current, curr);
        break;
      } else if (!pre && current.val > curr.val) {
        curr.next = ret;
        ret = curr;
        break;
      } else if (pre && current.val > curr.val && pre.val < curr.val) {
        insert(pre, curr);
        break;
      } else {
        pre = current;
        current = current.next;
      }
    }
    curr = next;
  }
  return ret;
};
