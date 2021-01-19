// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

var singleNumber = function(nums) {
    let charCount ={}
    for(let i=0; i<nums.length; i++){
        //Object[key] = Object[key] +1
        charCount[nums[i]]=(charCount[nums[i]] || 0) +1
    }
    //Iterate over array of keys and find key ===1
      let result = Object.keys(charCount).find(key => charCount[key] ===1)
      
      return result
  };