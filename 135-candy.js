/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  if (ratings.length <= 1) return ratings.length;
  let result = [];
  for (let i = 0; i < ratings.length; i++) {
    result.push(1);
  }
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) result[i] = result[i - 1] + 1;
  }
  for (let i = ratings.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i])
      result[i - 1] = Math.max(result[i] + 1, result[i - 1]);
  }
  return result.reduce((sum, value) => sum + value);
};
