// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.

// time and space O(n)
var firstUniqChar = function(s) {
    const map = new Map() //create an empty {}
    
    //go through the whole string and count letters
    //on first iteration map = {"l" => 1}
    for(const letter of s) {
        map.set(letter, map.get(letter) + 1 || 1)
    }
    
    //after we got our object, check which one has value of 1
    for(let i=0; i<s.length; i++) {
        //first letter we check is "l"
        const letter = s[i]
        //check the object, if value of "l" is 1, return index
        if(map.get(letter) === 1) { 
            return i    
        }
    }
    
    return -1
};

s = "leetcode"