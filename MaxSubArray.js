/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has 
 * the largest sum and return its sum.
 * 
 * Example:  
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * Follow up:
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/


function maxSubArray(arr) {
  // The max contiguous sum
  let maxSum = 0;

  // The sum of all the elements up to this point
  let sumEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    sumEndingHere += arr[i];
    if (sumEndingHere < 0) {
      
    }
  }
}
