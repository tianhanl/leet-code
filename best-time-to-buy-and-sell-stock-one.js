/**
 * Question 121
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minimum = Number.MAX_VALUE;
  let largestProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    largestProfit = Math.max(largestProfit, prices[i] - minimum);
    minimum = Math.min(minimum, prices[i]);
  }
  return largestProfit;
};