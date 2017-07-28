const helper = function(node, level, levels) {
  if(!node) return;
  if(!levels[level]) levels[level] = [];
  levels[level].push(node.val);
  helper(node.left, level+1, levels);
  helper(node.right, level+1, levels);
}

var levelOrder = function(root) {
  let result = [];
  helper(root, 0, result);
  return result;
}