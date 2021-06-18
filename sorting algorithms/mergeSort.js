// Merge unsorted array
// Time Complexity O(n log n)

function merge(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0

  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]) //push the smallest
      i++
    } else {
      // if i is equal to j
      results.push(arr2[j])
      j++
    }
  }
  
  while (i < arr1.length){
    results.push(arr1[i])
    i++
  }

  while (j < arr2.length){
    results.push(arr2[j])
    j++
  }
  return results
}

function mergeSort(arr) {
  if(arr.length <=1) return arr 

  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

//// Merge 2 sorted arrays
// O(n log n)
let firstArray = [1,3,5,7,9]
let secondArray = [2,4,8,12,14]

// First, we find which array[0] is min; then - we push it in the new array
function findMinAndRemove(firstArray, secondArray){
  let minFirst = firstArray[0]
  let minSecond = secondArray[0]

  if(minFirst < minSecond){
    return firstArray.shift() //return first element of first array
  } else {
    return secondArray.shift()
  }
}

function merge(firstArray, secondArray){
  let sorted = []
  while(firstArray.length != 0 && secondArray.length != 0){
    let currentMin = findMinAndRemove(firstArray, secondArray)
    sorted.push(currentMin)
  }
  // once one of arrays is empty, we can concat the rest in the second
  return sorted.concat(firstArray).concat(secondArray)
}

merge(firstArray, secondArray)