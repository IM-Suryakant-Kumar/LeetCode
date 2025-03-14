/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let costPrice = prices[0] , maxProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i - 1] < prices[i]) maxProfit += prices[i] - prices[i - 1];
    }

    return maxProfit;
};