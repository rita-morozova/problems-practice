/* Insertion Sort builds up the sort by gradually creating a  larger left half which is 
always sorted */

// Time Complexity O(n^2)

function insertionSort(arr) {
// start with 1, since arr[0] is sorted
  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i]

    for( let j = i-1; j >=0 && arr[j] > currentVal; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal
  }
  return arr
}