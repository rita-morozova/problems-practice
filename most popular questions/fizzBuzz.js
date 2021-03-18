// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

var fizzBuzz = function(n) {

    let result = []
    let i = 1
    
    while(i <=n){
        if(i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz")
        } else if (i % 5 === 0){
            result.push("Buzz")
        } else if (i % 3 === 0){
            result.push("Fizz")
        } else{
            result.push(i.toString())
        }
        
        i++
    }
    
    return result
       
};

// For loop runs faster

var fizzBuzz = function(n) {

    let output =[]
 
    
    for(let i=1; i<=n; i++){
        if(i%5 === 0 && i%3===0){
            output.push("FizzBuzz")
        } else if( i %5 === 0){
            output.push("Buzz")
        } else if(i %3 ===0){
            output.push("Fizz")
        }else{
            output.push(i.toString())
        }
    }
        return output
 };