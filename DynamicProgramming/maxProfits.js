//1 stock, time series
//dynamic
//prices array
function maxProfit(prices) {
  if(prices.length < 2) return -0;

  var minPrice = prices[0];
  var maxProfit = 0;


  for(let i=0; i<prices.length; i++) {
    let el = prices[i];
    if(el > minPrice) {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice); //sell
    }
    else {
      minPrice = prices[i]; //buy
    }
  }

  return maxProfit;
}

module.exports = maxProfit;



console.log(maxProfit([7,1,5,3,6,4]));