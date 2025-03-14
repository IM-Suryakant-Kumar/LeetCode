/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0], ans = 0;

    for(let i = 1; i < prices.length; i++) {
        if(buy < prices[i]) ans = Math.max(ans, prices[i] - buy);
        else buy = prices[i];
    }

    return ans;
};