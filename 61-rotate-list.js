/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let temp = head;
    let length = 0;
    while(temp) {
        length++;
        temp = temp.next;
    }
    k = k%length;
    
    if(k===0) return head;
    if(!head||!head.next) return head;
    
    let start = head;
    let count = 0;
    let pivot = head;
    let result = null;
    while(count < k) {
        count++;
        start = start.next;
    }
    
    while(start.next) {
        start = start.next;
        pivot = pivot.next;
    }
    result = pivot.next;
    pivot.next = start.next;
    start.next = head;
    return result;
    
};