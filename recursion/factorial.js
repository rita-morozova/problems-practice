// Write a factorial function which accepts a number and returns the factorial of that number. 
// A factorial is the product of an integer and all integers below
// Example: factorial four (4!) is equal 24, because 4*3*2*1 = 24.
// Factorial zero (0!) is always 1

function factorial(num){
    if(num < 0) return 0
    if(num === 0) return 1
    return num * factorial(num-1)
}