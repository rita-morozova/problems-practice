// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

var isAnagram = function(s, t) {
    //if different lengths - false
    if(s.length != t.length){
        return false
    }else{
        //make array, sort it and back to string
        let strS=s.split('').sort().join('')
        let strT = t.split('').sort().join('')
        
        return strS===strT ? true : false
    }
  };