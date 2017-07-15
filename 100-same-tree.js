/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isEqual = function(nodeA, nodeB) {  
    if (!nodeA && !nodeB) {
        return true;
    } else if (nodeA) {
        if (!nodeB) return false;
    } else {
        return false;
    }

    return (nodeA.val === nodeB.val) && isEqual(nodeA.left, nodeB.left) && isEqual(nodeA.right, nodeB.right);
}

var isSameTree = function(p, q) {
    return isEqual(p, q);
};