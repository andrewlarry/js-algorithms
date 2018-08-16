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
  // Track the max sum so for
  let maxSoFar = 0;

  // Track the max sum if this array ended here
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i];

    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
  }

  return maxSoFar;
}
