// Write a function sumZero which accepts a SORTED array of integers. The function should find
// the FIRST PAIR where the sum is zero. 
// Return an array that includes both values that sum up to zero or undefined if a pair doesn't exist.

// sumZero([-3,-2,-1,0,1,2,3]) => [-3,3]
// sumZero ([-2, 0, 1, 3]) => undefined



// Here Time Complexity is O(n square), Space Complexity O(1)

// function sumZero(arr){

//   for (let i = 0; i < arr.length; i++){
//     for (let j = i+1; j < arr.length; j++){
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// Solving using Multiple Pointers Pattern

function sumZero(arr){

  let left = 0 
  let right = arr.length -1 

  while (left <  right){
    let sum = arr[left] + arr[right]

    if(sum === 0){
      return [arr[left], arr[right]]
    } else if (sum > 0 ){
      right --
    } else {
      left ++
    }
  }
}

// Time Complexity is O(n)
// Space Complexity is O(1)

sumZero ([-4, -3, -2, -1, 0, 1, 2, 3, 10])

// 1) start at -4 and 10, sum > 0; so right --
// 2) check -4 and 3 now, sum < 0; so left ++
// 3) check -3 and 3, sum = 0; so return these  two 