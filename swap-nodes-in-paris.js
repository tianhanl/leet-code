/**
 * Question 24
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
var swapPairs = function (head) {
  let parent = null;
  let nextNode = head;
  let temp = null;
  while (nextNode) {
    if (!nextNode.next) return head;
    temp = nextNode.next;
    if (parent) parent.next = temp;
    else head = temp;
    nextNode.next = temp.next;
    temp.next = nextNode;
    parent = nextNode;
    nextNode = nextNode.next;
  }
  return head;

};