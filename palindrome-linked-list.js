/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const reverseList = function (head) {
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

var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }
  let count = 0;
  let loopHead = head;
  while (loopHead !== null) {
    loopHead = loopHead.next;
    count++;
  }
  let mid = count % 2 === 1 ? (count - 1) / 2 : count / 2;
  let midHead = head;
  for (let i = 0; i < mid; i++) {
    midHead = midHead.next;
  }
  if (count % 2 === 1) midHead = midHead.next;
  midHead = reverseList(midHead);
  for (let i = 0; i < mid; i++) {
    if (head.val !== midHead.val) return false;
    head = head.next;
    midHead = midHead.next;
  }
  return true;
};