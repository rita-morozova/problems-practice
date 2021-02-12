// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

 

// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false

var isPerfectSquare = function(num) {
   
    var start = 0;
    var end = num;
    while(start <= end){
        if (num != 0){
            if (num == 1){
                return true;
            }else{
                if(start*start == num){
                    return true;
                }
                start++;
            }
        }
    }
    return false;
};