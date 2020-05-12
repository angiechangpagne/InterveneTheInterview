//move all zeros to the end of the array

//rest of the array stays in tact




/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let trail = 0; //number of zeros to trail off at the end....
  // let localTrail = 0; //reset everytime we embark a filler from a previous 0
  for(let i=0; i<nums.length; i++) {
    let el = nums[i];
    if(el === 0){
      trail++;
      // localTrail++;
      //add zeros at the end because must keep order and no temps, keep it efficient with O(n) 
    } else if(el!== 0) {
      //check localTrail
        nums[i-trail] = el; //move up the trail based on its position
        // localTrail--; 
    }
    //now we check as the gap of trail is increasing if we have reached an index where it is safe to start moving zeros
    //eg the element has been shifted up, so we can add the zeros to the edge
    if(i>=nums.length-1-trail) {
      //we can escape it so it stays O(n)
      while(trail>0) {
        nums[nums.length-1-trail] = 0;
        trail--;
      }
    }
  }
  return;
};


module.exports = moveZeroes;