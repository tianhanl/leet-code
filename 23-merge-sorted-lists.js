/**
 * Question 23
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// insert node after toNode
const insert = function (node, toNode) {
  let temp = toNode.next;
  toNode.next = node;
  node.next = temp;
}

const getMinimum = function (lists) {
  let localMinNode;
  let index = 0;
  for (let i = 0; i < lists.length; i++) {
    if (!localMinNode && lists[i]) {
      localMinNode = lists[i];
      index = i;
    } else if (lists[i] && localMinNode.val > lists[i].val) {
      localMinNode = lists[i];
      index = i;
    }
  }

  if (localMinNode && localMinNode.next) {
    lists[index] = localMinNode.next;
  } else {
    lists.splice(index, 1);
  }
  return localMinNode;
}

var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;
  let count = 0;
  while (count < lists.length) {
    if (!lists[count] || lists[count].length === 0) {
      lists.splice(count, 1);
    } else {
      count++;
