/**
 * Question 44:
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let locS = 0,
    locP = 0;
  let match = 0;
  let starId = -1;
  while (locS < s.length) {
    if (locP < p.length && (p[locP] === '?' || s[locS] === p[locP])) {
      locS++;
      locP++;
    } else if (locP < p.length && p[locP] === '*') {
      starId = locP;
      match = locS;
      locP++;
    } else if (starId !== -1) {
      locP = starId + 1;
      match++;
      locS = match;
    } else {
      return false;
    }
  }

  while (locP < p.length && p[locP] === '*') {
    locP++;
  }

  return locP === p.length;
};
