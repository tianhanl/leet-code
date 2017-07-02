/**
 * Question 56
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  if (intervals.length <= 0) return [];
  intervals.sort(function (a, b) {
    if (a.start < b.start) return -1;
    if (a.start > b.start) return 1;
    return 0;
  })
  let result = [];
  let currLow = intervals[0].start;
  let currHigh = intervals[0].end;
  let count = 1;
  while (count < intervals.length) {
    if (intervals[count].start <= currHigh) {
      currHigh = Math.max(currHigh, intervals[count].end);
    } else {
      result.push(new Interval(currLow, currHigh));
      currLow = intervals[count].start;
      currHigh = intervals[count].end;
    }
    count++;
  }
  if (!result[0] || result[result.length - 1].end < currHigh) {
    result.push(new Interval(currLow, currHigh));
  }
  return result;

};