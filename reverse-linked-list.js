/**
 * Question: 206
 * 
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
const appendAfter = function (head, node) {
  head.next = node;
}

var reverseList = function (head) {
  if (!head) return null;
  var nodeToAppend = null;
  while (head.next) {
    temp = head.next;
    appendAfter(head, nodeToAppend);
    nodeToAppend = head;
    head = temp;
  }
  head.next = nodeToAppend;
  return head;
};