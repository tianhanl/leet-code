/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let indicies = [];
  let length = p.length;
  if (s.length < p.length) return [];
  let frequency = new Array(26).fill(0);
  let codeA = 'a'.charCodeAt(0);
  let chars = s.split('').map(element => element.charCodeAt(0) - codeA);
  p
    .split('')
    .map(element => element.charCodeAt(0) - codeA)
    .forEach(element => {
      if (frequency[element]) {
        frequency[element] += 1;
      } else {
        frequency[element] = 1;
      }
    });
  for (let i = 0; i < s.length; i++) {
    frequency[chars[i]] -= 1;
    if (i + 1 - length >= 0) {
      if (frequency.every(element => element === 0))
        indicies.push(i + 1 - length);
      frequency[chars[i + 1 - length]] += 1;
    }
  }
  return indicies;
};
