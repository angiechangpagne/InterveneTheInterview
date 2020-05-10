//Amazonian Question
/**
 * 
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
Example:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
 */

 /**
  * Don't go chasing waterfalls
  * @param 
  * @return 
  */
const CalculateElevation = (elevations) => {
  //sliding window, the maximum elavation of rain water to hit
  
  //chasing heights/Chasing Waterfalls

  //graph index of width = 1 unit, elevation from the array on y axis 
  //use Math.floor

  let result = 0;

  //elevation of the current height is based on the previos of the pairs

  //the difference in elevations is between the boundarys, a boundary is the Math.min of the two walls
  //we can detect the wall each time the current height elevated is greater than the last elevated height(hence we take the min)

  //we can think of tracing the left and rights like left and right pointers for the wall boundaries of water

  if(elevations.length<2) {
    return 0; //no boundaries = no area
  }
  let leftWall = elevations[0];
  let rightWall = null;
  //elevations[0]; //no saet boundaries yet

  for(let i = 1; i< elevations.length; i++) {
    let currentElevation = elevations[i];
    if(currentElevation > leftWall) {
      //overflow
      if(rightWall === null) {
        rightWall = currentElevation;
      } else {
        leftWall = rightWall;
        rightWall = null;
      }
        //we have a right wall, so we are shifting/slide the windows/ of the walls
        let potentialDifference = leftWall;
        while(potentialDifference > 0) {
          result++;
          potentialDifference--;
        }
    }
    else if(currentElevation <= leftWall) {
      let potentialDifference = leftWall - currentElevation;
      while(potentialDifference>0) {
        result++;
        potentialDifference --;
      }
    }

  }




  return result;
}


export default CalculateElevation;