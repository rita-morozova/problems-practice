// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// Solving using hashmap, O(n)
var isAnagram = function(s, t) {
    // edge case, if strings lengths are not equal -> false
    if(s.length != t.length) return false
    
    //create two new objects and count key-value pairs
    let map1 = new Map()
    let map2 = new Map()
    
    for(const el of s){
        map1.set(el, map1.get(el)+1 ||1)
    }
    
    for(const el of t){
        map2.set(el, map2.get(el)+1 ||1)
    }
    
    // if lengths are diffrent -> false
    if(map1.size != map2.size) return false
    
    //check for key, value of map1 should be equal to map2
    for(const [key, value] of map1){
        if(map2.get(key) !=value) return false
    }
    
    return true

};

// O(n*log n)
var isAnagram = function(s, t) {
	if (s.length!==t.length) return false;
    // split string into array, sort and join back to string, check against another one 
    return s.split('').sort().join('')===t.split('').sort().join('');
};