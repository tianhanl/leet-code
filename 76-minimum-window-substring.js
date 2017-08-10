/**
 * Question 76
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (!t || !s) return '';
  let need = {};
  for (let i = 0; i < t.length; i++) {
    if (!need[t[i]]) need[t[i]] = 1;
    else need[t[i]]++;
  }
  let missing = t.length;
  let i = 0;
  let I = 0;
  let J;
  for (let j = 0; j < s.length; j++) {
    if (!need[s[j]]) need[s[j]] = 0;
    missing -= need[s[j]] > 0;
    need[s[j]] -= 1;
    if (!missing) {
      while (i < j && need[s[i]] < 0) {
        need[s[i]] += 1;
        i += 1;
      }
      if (J === undefined || j - i < J - I) {
        I = i;
        J = j;
      }
    }
  }
  return !missing ? s.slice(I, J + 1) : '';
};
