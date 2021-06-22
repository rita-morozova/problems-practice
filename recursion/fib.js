// Write a function called fib which accepts a number and returns the n-th number in the Fibonacci sequence.
// Recall that Fibonacci sequence is the sequence of whole umbers 1,1,3,5,,8 ....
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers

// fib(4) // 3
// fib(10) //55

function fib(num){
    if(num <=2) return 1
    return fib(num-1) + fib(num-2)
}