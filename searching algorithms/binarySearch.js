function binarySearch(arr, elem) {
  let start = 0
  let end = arr.length - 1
  //add Math.floor in case the array has odd number of elements
  let middle = Math.floor((start+end) / 2)

  //include start<=end to avoid an infinite loop
  while(arr[middle] !== elem && start <=end){

    if(elem < arr[middle]){
      end = middle-1
    }else {
      start = middle +1
    }
    middle = Math.floor((start+end) / 2)
  }
  if(arr[middle] === elem){
    return middle
  }else{
    return -1
  }
}

//Time Complexity O(log n)