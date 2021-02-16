function linearSearch(arr, val){
  return arr.indexOf(val)
}

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === val) return i
  }

  return -1
}

//O(n)