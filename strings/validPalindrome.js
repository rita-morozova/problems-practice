// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input: "race a car"
// Output: false



let isPalindrome = function(s) {
    
  let re = /[\W_]/g;
  let lowRegStr = s.toLowerCase().replace(re, '');
  let  reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
};