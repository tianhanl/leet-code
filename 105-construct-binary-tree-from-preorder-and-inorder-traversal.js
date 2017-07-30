var buildTree = function(preorder, inorder) {
  const helper = function(pStart, iStart, iEnd) {
    if(pStart>preorder.length || iStart > iEnd) {
      return null;
    }
    let node = new TreeNode(preorder[pStart]);
    let iIndex = inorder.indexOf(node.val);
    node.left = helper(pStart+1, iStart, iIndex-1);
    node.right = helper(pStart+iIndex-iStart+1, iIndex+1, iEnd);
    return node;
  }
  return helper(0,0,inorder.length-1);
}