/**
 * Question 57
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length <= 0) return [newInterval];
  let result = [];
  let lhs = -1;
  let rhs = -1;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i].end >= newInterval.start) {
      if (lhs === -1) lhs = i;
    }
    if (intervals[i].start > newInterval.end) {
      if (rhs === -1) rhs = i;
      break;
    }
  }
  console.log(lhs, rhs);
  if (lhs !== -1) { // if there are elments to be merged
    if (rhs === -1) rhs = intervals.length;
    let low = newInterval.start;
    let high = newInterval.end;
    for (let i = lhs; i < rhs; i++) {
      low = Math.min(intervals[i].start, low);
      high = Math.max(intervals[i].end, high);
    }
    for (let i = 0; i < lhs; i++) {
      result.push(intervals[i]);
    }
    result.push(new Interval(low, high));
    for (let i = rhs; i < intervals.length; i++) {
      result.push(intervals[i]);
    }
    return result;
  } else {
    if (rhs === -1) return intervals.concat([newInterval]);
    return intervals.splice(rhs - 1, 0, newInterval);
  }

};