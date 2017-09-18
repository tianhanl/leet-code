/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || !grid[0]) return 0;
  let count = 0;
  let vertical = grid.length;
  let horizontal = grid[0].length;

  let tracked = [];
  for (let i = 0; i < vertical; i++) {
    tracked.push([]);
    for (let j = 0; j < horizontal; j++) {
      tracked[i].push(false);
    }
  }
  const markRelated = function(x, y) {
    for (let i = y - 1; i >= 0; i--) {
      if (grid[x][i] === '1') {
        tracked[x][i] = true;
        if (x + 1 < vertical && grid[x + 1][i] === '1' && !tracked[x + 1][i]) {
          markRelated(x + 1, i);
        }
        if (x - 1 >= 0 && grid[x - 1][i] === '1' && !tracked[x - 1][i]) {
          markRelated(x - 1, i);
        }
      } else {
        break;
      }
    }
    for (let i = y; y < horizontal; i++) {
      if (grid[x][i] === '1') {
        tracked[x][i] = true;
        if (x + 1 < vertical && grid[x + 1][i] === '1' && !tracked[x + 1][i]) {
          markRelated(x + 1, i);
        }
        if (x - 1 >= 0 && grid[x - 1][i] === '1' && !tracked[x - 1][i]) {
          markRelated(x - 1, i);
        }
      } else {
        break;
      }
    }
  };

  for (let i = 0; i < vertical; i++) {
    for (let j = 0; j < horizontal; j++) {
      if (grid[i][j] === '1' && !tracked[i][j]) {
        markRelated(i, j);
        count++;
      }
    }
  }
  return count;
};
