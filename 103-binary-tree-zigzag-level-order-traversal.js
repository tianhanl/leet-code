const helper = function(root, count, result) {
  if(!root) {
	return;
  } else {
  	if(!result[count]) result[count] = [];
    result[count].push(root.val);
    helper(root.left, count+1, result);
    helper(root.right, count+1, result);
  }
}

var zigzagLevelOrder = function(root) {
  let results = [];
  helper(root, 0, results);
  results.forEach((element, index)=> {
    if(index%2===0) return element;
    // reverse is in-place
    else return element.reverse();
  })
  return results;
}