/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  if (numCourses < 1) return true;
  let nodes = new Map();
  for (let i = 0; i < numCourses; i++) {
    // setting up the graph for dependency
    nodes.set(i, []);
  }

  for (let prerequisit of prerequisites) {
    // add dependency for each node
    nodes.get(prerequisit[0]).push(prerequisit[1]);
  }

  while (nodes.size) {
    let start = null;
    // find the element with no incoming edge
    for (let node of nodes.entries()) {
      if (node[1].length === 0) {
        start = node;
        break;
      }
    }
    // if such element does not exist, the schedule does not exist
    if (!start) {
      return false;
    } else {
      nodes.forEach(value => {
        let index = value.findIndex(element => element === start[0]);
        if (index >= 0) {
          value.splice(index, 1);
        }
      });
      nodes.delete(start[0]);
    }
  }
  return true;
};
