/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
}
 * @param {number} n
 * @return {TreeNode[]}
 */
const helper = function(lhs, rhs) {
  let result = [];
  if (lhs > rhs) {
    result.push(null);
    return result;
  } else {
    for (let i = lhs; i <= rhs; i++) {
      let leftTrees = helper(lhs, i - 1);
      let rightTrees = helper(i + 1, rhs);
      for (let j = 0; j < leftTrees.length; j++) {
        for (let k = 0; k < rightTrees.length; k++) {
          let root = new TreeNode(i);
          root.left = leftTrees[j];
          root.right = rightTrees[k];
          result.push(root);
        }
      }
    }
  }
  return result;
};

var generateTrees = function(n) {
  if (n === 0) return [];
  return helper(1, n);
};
