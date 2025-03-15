/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cp = prices[0] , maxProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(cp < prices[i]) {
            maxProfit += prices[i] - cp;
            cp = prices[i];
        } else {
            cp = prices[i];
        }
    }

    return maxProfit;
};