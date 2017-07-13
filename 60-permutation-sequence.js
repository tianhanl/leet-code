/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let pTable = [1];

    for (let i = 1; i <= 9; i++) {
        pTable[i] = i * pTable[i - 1];
    }

    let result = '';
    let numSet = [];
    numSet.push('1');
    numSet.push('2');
    numSet.push('3');
    numSet.push('4');
    numSet.push('5');
    numSet.push('6');
    numSet.push('7');
    numSet.push('8');
    numSet.push('9');
    while (n > 0) {
        let temp = Math.floor((k - 1) / pTable[n - 1]);
        result += numSet[temp];
        numSet.splice(temp, 1);
        k = k - temp * pTable[n - 1];
        n--;
    }
    return result;
};