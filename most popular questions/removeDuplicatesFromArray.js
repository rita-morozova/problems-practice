// 


// runtime 96 ms
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
};


var removeDuplicates = function(nums) {
    let i=0;
    
    while(i<nums.length){
        const element = nums[i++]
        while(element === nums[i]) nums.splice(i, 1) //remove duplicates until different
    }
    return nums.length
};