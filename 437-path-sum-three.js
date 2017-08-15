/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathFrom = function(node, sum) {
  if (!node) return 0;
  let result = node.val === sum ? 1 : 0;
  result += pathFrom(node.left, sum - node.val);
  result += pathFrom(node.right, sum - node.val);
  return result;
};

var pathSum = function(root, sum) {
  if (!root) return 0;
  return (
    pathFrom(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
  );
};
