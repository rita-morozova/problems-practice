// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Return the power of the string.

 

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
// Example 3:

// Input: s = "triplepillooooow"
// Output: 5

var maxPower = function(s) {
    let max = 0
    let char = s[0]
    let freq = 1
    
    //start with index 1, since 0 already decalred
    for (let i = 1; i < s.length; i++){
        //if index 1 === index 0, increase freq
        if(s[i] === char) freq ++
        else{
            max = Math.max(max, freq)
            freq = 1
            char = s[i]
        }
    }
    
    return Math.max(max, freq)
    
};