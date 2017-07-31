/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let rows = [[1]];
  for (let i = 1; i <= rowIndex; i++) {
    let currentRow = [];
    for (let j = 0; j <= i; j++) {
      let currValue = rows[i - 1][j - 1] ? rows[i - 1][j - 1] : 0;
      currValue += rows[i - 1][j] ? rows[i - 1][j] : 0;
      currentRow.push(currValue);
    }
    rows.push(currentRow)
  }
  return rows[rowIndex];
};