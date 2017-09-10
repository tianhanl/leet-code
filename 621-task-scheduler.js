/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  if (!tasks || tasks.length < 1) return 0;
  let map = new Map();
  let result = 0;
  let count = n;
  tasks.forEach(element => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  });
  let queue = [...map.entries()];
  queue.sort((a, b) => b[1] - a[1]);
  let temp = [];
  while (queue.length || count >= 0) {
    if (!queue.length && !temp.length) break;
    result++;
    count--;
    if (queue.length) {
      let curr = queue.shift();
      curr[1]--;
      if (curr[1]) temp.push(curr);
    }
    if (temp.length && count < 0) {
      queue.push(...temp);
      queue.sort((a, b) => b[1] - a[1]);
      temp = [];
      count = n;
    }
  }
  return result;
};
