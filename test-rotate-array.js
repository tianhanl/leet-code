const rotateArrayExtra = require('./rotate-array.js').rotateArrayExtra;
const rotateArrayReverse = require('./rotate-array').rotateArrayReverse;

const assert = require('assert');

var testArray1 = [1, 2, 3, 4, 5, 6, 7];
var testArray2 = [1, 2, 3, 4, 5, 6, 7];

rotateArrayExtra(testArray1, 3);
rotateArrayReverse(testArray2, 3);
console.log(testArray1);
console.log(testArray2);