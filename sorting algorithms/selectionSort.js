// Similar to bubble sort, but instead of placing large values to the end, it find min in the 
// whole array and puts it at the beginning 

// Time Complexity O(n^2)

function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++){
    let lowest = i

    for (let j = i+1; j < arr.length; j++){

      if(arr[lowest] > arr[j]){
        lowest = j
      }
    }

    if (i !== lowest){
      //SWAP
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr
}