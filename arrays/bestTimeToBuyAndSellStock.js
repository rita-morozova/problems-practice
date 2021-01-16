// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function(prices) {
  //find min in array, need to use destucturing since we are looking for a min in the array
  let dayToBuy = Math.min(...prices)
  
  //find index of min in the array and splice everything before that index
  let index = prices.indexOf(dayToBuy)
  let profit
  
   if(dayToBuy === prices[prices.length-1]){
     profit =0
  }else{
  
  prices.splice(0, index+1)
  
  //find max in the new array 
  let dayToSell =Math.max(...prices)
  profit = dayToSell - dayToBuy 
  }
   return profit
};