// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109



//runtime 872ms (O(n^2))

var containsDuplicate = function(nums) {
    
    for(let i = 0; i < nums.length; i++) {
       for(let j = i + 1; j < nums.length; j++) {
           if(nums[j] === nums[i]) return true;
       }
   }
   return false;
};



//runtime 88ms, O(n)

var containsDuplicate = function(nums) {
   //create an empty {}
    const hash = new Map();
  
    //iterate over every element in array
    for (const element of nums) {
      //check if there is element already in the hash
      if (hash.has(element)) return true;
      //if there is no such element set it in the hash
      hash.set(element, true); //hash = {1 => true}
    }
  
    return false;
  };

  // O(n)
  var containsDuplicate = function (nums) {
      //check if both arrays lengths are equal
    let result = new Set(nums).size != nums.length;
    return result;
  };

  var containsDuplicate = function (nums) {
    if(new Set(nums).size != nums.length) return true
    return false
  };
