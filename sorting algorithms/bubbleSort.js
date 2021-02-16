// Sort an array [35, 45, 7, 8]

// Time complexity O(n^2)

function bubbleSort(arr) {
  let noSwaps;
  // i = 4
  for (let i = arr.length; i > 0; i--) {
    // compare only to 3, since the largest number will be bubbled to the end of the array
    for (let j = 0; j < i-1; j++) {

      if(arr[j] > arr[j+1]){
        //SWAP!
        let temp = arr[j] //35
        arr[j] = arr[j+1] //35=45
        arr[j+1] = temp // 45=35
        noSwaps = false
      }
    }
    if (noSwaps) break;
  }
  return arr
}