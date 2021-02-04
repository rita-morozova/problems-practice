// Implement a function which accepts a SORTED array, and counts the unique values in the array

// count([1,1,1,1,2]) => 2
// count([[]]) => 0
// count([-2,-1,-1,0,1]) => 4

// We set pointers to arr[0] & arr[1]

function countUniqueValues(arr){

  if (arr.length === 0) return 0

  let i = 0

  for (let j = 1; j < arr.length; j++ ){

    if (arr[i] !== arr[j]){
      i++
      arr[i]=arr[j]
    }
  }

  return i+1
}

// Time Complexity O(n)