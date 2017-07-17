/**
 * Question 79
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let exist = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (existHelper(board, i, j, word, 0)) return true;
        }
    }
    return false;
}

const existHelper = function(board, x, y, word, start) {
    // If helper find all chars in word
    if (start >= word.length) return true;

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return false;

    if (board[x][y] == word[start]) {
        start++; // make it less confusing
        let c = board[x][y];
        board[x][y] = '#'; // mark this pos as visited

        // Test does it have position for any of its 4 directions.
        let res = existHelper(board, x + 1, y, word, start) || existHelper(board, x - 1, y, word, start) ||
            existHelper(board, x, y + 1, word, start) || existHelper(board, x, y - 1, word, start);

        board[x][y] = c; // remove the mark
        return res;
    }
    return false;
}