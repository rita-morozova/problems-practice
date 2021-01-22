// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false

var isPowerOfThree = function(n) {
    if (n < 1) return false
    
    // if remainder is 0 keep dividing
    while (n % 3 === 0){
        n /=3
    }
    
    return n === 1
};