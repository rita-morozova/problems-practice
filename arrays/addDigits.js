// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.

function addDigits(num) {
  if(num <=9){
      return num
  }else{
    //make an array of numbers
      let array = num.toString().split('')
      let arrayOfNumbers = array.map ((ch) => parseInt(ch))
    // find sum of the array
      let sum = arrayOfNumbers.reduce((total, currentValue) => total+currentValue)
      if(sum <=9){
          return sum
      }else{
          num = sum
          //recursive
          return addDigits(num)
      }
  }
};