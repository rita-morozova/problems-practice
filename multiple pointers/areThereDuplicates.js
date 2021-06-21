// Write a function which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
// Use multiple pointers to solve
// areThereDuplicates(1,2,2) //true

function areThereDuplicates(...args){
    args.sort((a,b) => a > b)

    let start = 0
    let next = 1

    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}