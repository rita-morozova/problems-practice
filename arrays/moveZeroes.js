// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
    
    let zeroes = 0
    let array = []
    
    //count all zeroes
    for ( let i=0; i < nums.length; i++) {
        if(nums[i] === 0) zeroes +=1
    }
    
    //make all non-zeroes retain their place in the array 
    for(let i=0; i< nums.length; i++){
        if(nums[i] !==0) array.push(nums[i])
    }
    
    //move all zeroes to the end (while the are zeroes, decrease on each loop)
    while(zeroes--){
        array.push(0)
    }
    
    //combine result
    for (let i=0; i<nums.length; i++){
        nums[i] = array[i]
    }
};