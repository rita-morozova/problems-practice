Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

 

Note: You may assume the string contains only lowercase English letters.


Solution:

var firstUniqChar = function(s) {
    
  //create an empty object to store key-values
  let charCount={}
  
  //iterate over string and count each key
  for(let i=0; i<s.length; i++){
      charCount[s[i]] = (charCount[s[i]] || 0)+1
  }

  //return key
   let result = Object.keys(charCount).find(key => charCount[key] === 1);
  
  return result ? s.indexOf(result) : -1
    
};
