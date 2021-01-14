// You are given a string representing an attendance record for a student. The record only contains the following three characters:

//     'A' : Absent.
//     'L' : Late.
//     'P' : Present.

// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:

// Input: "PPALLP"
// Output: True

// Example 2:

// Input: "PPALLL"
// Output: False

var checkRecord = function(s) {
  //check for 3 L
  let late = s.includes('LLL')
  //check how many a's
  let absent = s.toLowerCase().split('').filter(ch => ch ==='a' ).length
   
  if(absent <=1 && !late){
      return true
  }else{
      return false
  }
 
};