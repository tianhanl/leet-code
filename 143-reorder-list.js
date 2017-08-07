/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reverseList = function(head) {
  if (!head) return null;
  var nodeToAppend = null;
  while (head.next) {
    temp = head.next;
    head.next = nodeToAppend;
    nodeToAppend = head;
    head = temp;
  }
  head.next = nodeToAppend;
  return head;
};
var reorderList = function(head) {
  let slow = head;
  let quick = head;
  if (!head) return;
  while (quick.next && quick.next.next) {
    slow = slow.next;
    quick = quick.next.next;
  }
  slow = reverseList(slow);
  while (head) {
    let tempH = head.next;
    let tempS = slow.next;
    head.next = slow;
    slow.next = tempH;
    slow = tempS;
    head = tempH;
  }
};
