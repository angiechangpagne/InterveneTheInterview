/**
 * 
 * @param {[]} nums 
 * @param {Number} k 
 */
function maxSubarr(nums, k) {
  var memo = {};
  var maxLen = 0;

  var sum = 0;

  for(let i =0; i<nums.length;i++) {
    let el = nums[i];
    sum += el;
    if(sum === k) { maxLen = i+1; } 
    else {
      if(memo[sum-k]) {
        maxLen = Math.max(maxLen, i-memo[sum-k]);
      }
    }
    if(!memo[sum]) memo[sum] = i; //store index
  }



  return maxLen;
}

module.exports = maxSubarr;