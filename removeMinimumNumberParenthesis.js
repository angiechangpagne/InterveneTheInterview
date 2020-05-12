/**
 * Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.
Note: The input string may contain letters other than the parentheses ( and ).
Example 1:
Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:
Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:
Input: ")("
Output: [""]
 */

 /**  Hint 5
  * For every left parenthesis, we should have a corresponding right parenthesis. We can make use of two counters which keep track of misplaced left and right parenthesis and in one iteration we can find out these two values.
0 1 2 3 4 5 6 7
( ) ) ) ( ( ( )  
i = 0, left = 1, right = 0
i = 1, left = 0, right = 0
i = 2, left = 0, right = 1
i = 3, left = 0, right = 2
i = 4, left = 1, right = 2
i = 5, left = 2, right = 2
i = 6, left = 3, right = 2
i = 7, left = 2, right = 2
We have 2 misplaced left and 2 misplaced right parentheses.
 */

// Leet #301
//so while we check the validity with the stack, and stacks that have containing elements must be removed.
//but this is also a shifting/sliding window


 const RemoveMinimumNumberParenthesis = () => {

 }



 export default RemoveMinimumNumberParenthesis;