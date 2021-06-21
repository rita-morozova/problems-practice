// Write a function isSubsequence which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string. Order should not be changed

// isSubsequence('hello', 'hello world') // true
// isSubsequence('abc', 'acb') // false


// Time O(n), Space O(1)
function isSubsequence(str1, str2){
    var i = 0
    var j = 0

    if(!str1) return true
    while(j < str2.length){
        if(str2[j] === str1[i]) i++
        if (i === str1.length) return true 
        j++
    }
    return false
}

//Time O(n)
function isSubsequence(str1, str2){
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}