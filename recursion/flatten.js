// Write a recursive function which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1,2,3,[4,5]]) // [1,2,3,4,5]

function flatten(oldArray){
    var newArr = []

    for(var i = 0; i < oldArray.length; i++){
        if(Array.isArray(oldArray[i])){
            newArr = newArr.concat(flatten(oldArray[i]))
        } else {
            newArr.push(oldArray[i])
        }
    }
    return newArr
}