/**
 * question 122
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var finalProfit = 0;
  var length = prices.length;
  for (let i = 1; i < length; i++) {
    finalProfit += Math.max(prices[i] - prices[i - 1], 0);
  }
  return finalProfit;

};