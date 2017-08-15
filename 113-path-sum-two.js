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
const helper = function(node, currSum, target, preset, results) {
  if (!node) return;
  if (!node.left && !node.right) {
    currSum += node.val;
    if (currSum === target) {
      preset.push(node.val);
      results.push(preset.slice());
      preset.pop();
    }
  } else {
    preset.push(node.val);
    helper(node.left, currSum + node.val, target, preset, results);
    helper(node.right, currSum + node.val, target, preset, results);
    preset.pop();
  }
};

var pathSum = function(root, sum) {
  let results = [];
  helper(root, 0, sum, [], results);
  return results;
};
