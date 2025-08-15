/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {    
    let minProfit = prices[0], maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] - minProfit > maxProfit) {
            maxProfit = prices[i] - minProfit;
        } else {
            if (minProfit > prices[i])
                minProfit = prices[i];
        }   
    }
    return maxProfit;
};
