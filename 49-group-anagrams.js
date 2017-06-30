/**
 * Question 49
 * @param {string[]} strs
 * @return {string[][]}
 * Convert the characters into number and compare the value of the sum?
 */
var groupAnagrams = function (strs) {
  if (strs.length <= 0) return [[]];
  let map = new Map();
  strs.forEach(function (string) {
    chars = string.split('');
    chars.sort();
    let key = chars.join('');
    if (!map.has(key)) {
      map.set(key, [string]);
    } else {
      map.get(key).push(string);
    }
  })
  return Array.from(map.values());
};