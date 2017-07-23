/**
 * Question 36
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let frequency = [];
  frequency[9] = 0;
  frequency.fill(0);
  for (let i = 0; i < board.length; i++) {
    board[i].forEach(element => {
      if (element != '.') frequency[element]++;
    })
    if (frequency.slice(1, 10).some(element => element > 1)) return false;
    frequency.fill(0);
  }
  for (let i = 0; i < board.length; i++) {
    board.forEach(element => {
      if (element[i] != '.') frequency[element[i]]++;
    })
    if (frequency.slice(1, 10).some(element => element > 1)) return false;
    frequency.fill(0);
  }
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          if (board[k][l] != '.') frequency[board[k][l]]++;
        }
      }
      if (frequency.slice(1, 10).some(element => element > 1)) {
        return false;
      }
      frequency.fill(0);
    }
  }
  return true;
};