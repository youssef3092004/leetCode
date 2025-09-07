/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {    
    let minDay = prices[0], maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (maxProfit < prices[i] - minDay)
            maxProfit = prices[i] - minDay;
        if (minDay > prices[i])
            minDay = prices[i];
    }
    return maxProfit;
};
