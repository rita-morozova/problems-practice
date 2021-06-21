// Write a function which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
// Use frequency counter to solve
// areThereDuplicates(1,2,2) //true

//O(n)

function areThereDuplicates(){
    let collection = {}

    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0)
    }

    for(let key in collection){
        if(collection[key] > 1) return true
    }

    return false
}

function areThereDuplicates(){
    return new Set(arguments).size = arguments.length
}