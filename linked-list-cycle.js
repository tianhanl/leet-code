/**
 * Question: 141
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
var hasCycle = function(head) {
    if (!head) return false;
    let path = new Set();
    path.add(head);
    while (head.next !== null) {
        if (path.has(head.next)) return true;

        path.add(head.next);
        head = head.next;
    }
    return false;
};