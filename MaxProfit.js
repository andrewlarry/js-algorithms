/**
  * Say you have an array for which the ith element is the price of a given stock on day i. If you were 
  * only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), 
  * design an algorithm to find the maximum profit.
  *
  * Example : 
  * Input : [1 2]
  * Return :  1
*/

// [1, 3, 17, -10, 10, 3]


function maxProfit(prices) {
  // The prices array must be of at least length 2
  if (prices.length < 2) throw new Erorr('Invalid argument.');

  // Assume the last element in the array is the max price
  const len = prices.length;
  let maxPrice = prices[len - 1];

  // Initialize as the difference between the last two elements
  let max = prices[len - 1] - prices[len - 2];

  for (let i = prices.length - 2; i >= 0; i--) {
    const profit = maxPrice - prices[i];

    // The price on the ith day is greater than the max price
    if (profit < 0) {
      maxPrice = prices[i];
    } else if (profit > max) {
      max = profit;
    }
  }

  return max;
}

console.log(maxProfit([1, 3, 17, -16, 10, 3]));