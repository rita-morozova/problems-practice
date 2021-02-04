/* Write a function called maxSubarraySum which accepts an array of integers and a number 
called n. The function should calculate the maximum sum of consecutive elements in array.

Example:

maxSubarraySum([4, 2, 1, 6], 1 ) // 6
maxSubarraySum([],4) // null
maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
*/

// Bad Solution. Time Complexity O(n^2)
// function maxSubarraySum(arr, num) {

//   if(num > arr.length) {
//     return null
//   }

//   var max = -Infinity 

//   for (let i = 0; i < arr.length-num+1; i++){
//     temp = 0;

//     for(let j =0; j < num; j++){
//       temp+=arr[i+j]
//     }

//     if(temp > max){
//       max=temp
//     }
//     return max
//   }
// }

// Time Complexity O(n)

function maxSubarraySum(arr, num) {

  let maxSum = 0
  let tempSum = 0

  //edge case
  if(arr.length < num) return null

  //take 3 first numbers ans store their sum in temp var
  for( let i = 0; i < num; i++){
    maxSum += arr[i]
  }

  //reassign value to maxSum, now we have 2 values, max and temp
  tempSum = maxSum

  // we starting our loop with i=num, arr[3], because we already know the sum of the first three num
  for( let i = num; i < arr.length; i++){

    //now tempSum is equal to tempSum - arr[0] + arr[3] - we are moving sliding window to the right
    tempSum = tempSum - arr[i - num] + arr[i]
    //find which one is max
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3,], 3)
