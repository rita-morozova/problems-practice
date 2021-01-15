// 


var sortArrayByParity = function(A) {
  let array = []
  let even = []
  let uneven = []
  
  for (let i = 0; i<A.length; i++){
      if(A[i] % 2 == 0){
          even.push(A[i])
      }else{
        uneven.push(A[i])  
      }
  }
  //don't do array.push(even) array.push(uneven)! will be an array of arrays
  even.map (el => array.push(el))
  uneven.map (el => array.push(el))
  return array  
  
};