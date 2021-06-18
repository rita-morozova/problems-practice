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

/////
// O(n^2)
let list = [9, 5, 7, 3]

function insertionSort(list) {
  
  //always start with value of index 1, because list[0] is sorted
  for (let index = 1; index < list.length; index++){
  // start with list[0] on first iteration, cause its sorted
    let indexOfSortedSection = index - 1
    let valueToInsert = list[index] // need to insert 5 - list[1] 

    while(list[indexOfSortedSection] > valueToInsert){ // 9>5
      let newValue = list[indexOfSortedSection] //9
      //swap 9 & 5; list[1] = 9
      list[indexOfSortedSection + 1] = newValue //list is [9, 9, 7, 3]
      indexOfSortedSection-- // index is -1 now
    }
    list[indexOfSortedSection+1] = valueToInsert //list[0] = 5
  }
  return list
}

insertionSort(list)