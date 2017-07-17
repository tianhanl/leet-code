/**
 * Question2
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var headOne = l1;
    var headTwo = l2;
    var resultEnd = null;
    var carry = 0;
    var useOne = true;
    while (headOne.next && headTwo.next) {
        headOne = headOne.next;
        headTwo = headTwo.next;
    }
    if (!headOne.next) useOne = false; //if l1 and l2 are the same length or l2 is larger
    headOne = l1;
    headTwo = l2;
    while (headOne || headTwo) { // when either one of the two list
        let val1 = headOne ? headOne.val : 0;
        let val2 = headTwo ? headTwo.val : 0;
        let val = val1 + val2 + carry;
        if (carry) carry = 0;
        if (val >= 10) {
            carry = 1
            val -= 10;
        }
        if (useOne) {
            headOne.val = val;
            resultEnd = headOne;
        } else {
            headTwo.val = val;
            resultEnd = headTwo;
        }
        if (headOne) headOne = headOne.next;
        if (headTwo) headTwo = headTwo.next;
    }
    if (carry) resultEnd.next = new ListNode(carry);

    if (useOne) return l1;
    else return l2;
};