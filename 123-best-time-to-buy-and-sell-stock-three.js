/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let holdOne = -Number.MAX_VALUE;
  let holdTwo = -Number.MAX_VALUE;
  let releaseOne = 0;
  let releaseTwo = 0;
  for (let i = 0; i < prices.length; i++) {
    releaseTwo = Math.max(releaseTwo, holdTwo + prices[i]);
    holdTwo = Math.max(holdTwo, releaseOne - prices[i]);
    releaseOne = Math.max(releaseOne, holdOne + prices[i]);
    holdOne = Math.max(holdOne, -prices[i]);
  }
  return releaseTwo;
};
