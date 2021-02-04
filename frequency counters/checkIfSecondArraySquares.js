//write a function same, which accepts two arrays. Function returns true if every value in 1st array
//has its corresponding value squared in the second. Frequency of values must be the same.

//same([1,2,3], [4,1,9]) => returns true

function same (arr1, arr2){

  if(arr1.length !== arr2.length){
    return false
  }
  //create 2 objects, each counts individual values in each array
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1){
    //count values of all the keys in array 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
  }

  for (let val of arr2){
    //count values of all keys in array 2
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
  }

  //check keys in frequencyCounter1 object
  for (let key in frequencyCounter1){

    //if key squared from frequencyCounter1 doesn't exist in frequencyCounter2 object => false
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    //check if values of both array are equal, if no false
    if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
      return false
    }
    return true
  }
}

//Time Complexity O(n)