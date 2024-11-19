/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let l = 0, r = 1;
    while(r < prices.length) {
        if(prices[l] < prices[r]) {
            maxProfit = Math.max(maxProfit, prices[r] - prices[l])
        } else {
            l = r;
        }
        r++;
    }
    return maxProfit;
};