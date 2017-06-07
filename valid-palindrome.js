/**
 * Question 125
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    if (s.length === 0) return true;
    var stringToTest = s.toLowerCase();
    stringToTest = stringToTest.replace(/[^a-z0-9]/gi, '');
    var low = 0;
    var high = stringToTest.length - 1;
    while (low <= high) {
        if (stringToTest.charAt(low) !== stringToTest.charAt(high)) {
            return false;
        }
        low++;
        high--;
    }
    return true;
};