/**
 * Given a positive integer number n, your task is to calculate the difference between the product of its digits and the sum of its digits.

Note: The order matters; the answer should be of the form product - sum (and not sum - product).

Example

For n = 123456, the output should be digitsManipulations(n) = 699.

The product of the digits is equal to 1 * 2 * 3 * 4 * 5 * 6 = 720.
The sum of the digits is equal to 1 + 2 + 3 + 4 + 5 + 6 = 21.
So the final answer is 720 - 21 = 699.

For n = 1010, the output should be digitsManipulations(n) = -2.

The multiplication of the digits is equal to 1 * 0 * 1 * 0 = 0.
The sum of the digits is equal to 1 + 0 + 1 + 0 = 2.
So the final answer is 0 - 2 = -2.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 109.

[output] integer

The difference between the product of n's digits and the sum of n's digits.
**/

//paralllel Leet 1281

function digitsManipulations(n) {
  //difference between product of digis and sum
  //think of binary shifts
  let prod = 1;
  let sum = 0;

  //consider string manipulation
  let stringN = Array.from(String(n), Number);

  // for(let i = 0; i < stringN.length; i++) {
  //     // if(stringN[i]==0){

  //     // }
  //     prod*=stringN[i]; 
  //     sum+=stringN[i];
  // }

  prod = stringN.reduce((a,b) => a*b);
  sum = stringN.reduce((a,b) => a+b);    
  // let current = n;
  // let i = 10;
  // while(current/i>0) {
  //     //to ones places
  //     let place = current%i; //get the current place digits
  //     prod*=place; 
  //     sum+=place;
  //     i*=10;
  // }



  return prod - sum;
}
