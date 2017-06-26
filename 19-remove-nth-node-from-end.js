/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // if there is only one node inside the list, since n is always valid.
  // the only element will alwasy be removed.
  if (n <= 0) return null;
  let count = 0;
  let parent = null
  let nodeToRemove = head;
  let nodeToStart = head;
  while (count < (n - 1)) {
    nodeToStart = nodeToStart.next;
    count++;
  }
  while (nodeToStart.next) {
    nodeToStart = nodeToStart.next;
    parent = nodeToRemove;
    nodeToRemove = nodeToRemove.next;
  }
  if (parent) {
    parent.next = nodeToRemove.next;
    // For GC, avoid dangling pointer
    nodeToRemove.next = null;
  } else {
    head = nodeToRemove.next;
    nodeToRemove.next = null;
  }

  return head;

};