/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) return head;
    let lhs;
    let rhs;
    let leftHead;
    let rightHead;
    while (head) {
        if (head.val >= x) {
            if (!rhs) {
                rhs = head;
                rightHead = head;
            } else {
                rhs.next = head;
                rhs = rhs.next;
            }   
        } else {
            if (!lhs) {
                lhs = head;
                leftHead = head;
            } else {
                lhs.next = head;
                lhs = lhs.next;
            }
        }
        head = head.next;
    }
    lhs && (lhs.next = rightHead);
    rhs && (rhs.next = null);
    return leftHead || rightHead;
};