// Write a function minSubArrayLen which accepts two parameters - an array of positive integers & a positive integer.
// This function should return the minimal length of a contigous subarray of which the sum is
// greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 => because [4,3] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 => because 62 greater than 52

// Time O(n), Space O(1)

function minSubArrayLen(nums, sum){
    let total = 0
    let start = 0
    let end = 0
    let minLen = Infinity

    while(start < nums.length){
        // if current window doesn't add up to the given sum then move the window to the right
        if(total < sum && end < nums.length){
            total += nums[end]
            end++
        }
        // if current window adds up to at least the sum given then we can shrink the window
        else if(total >= sum){
            minLen = Math.min(minLen, end-start)
            total -= nums[start]
            start++
        }
        // current total less than required total but we reach the end
        else {
            break
        }
    }
    return minLen === Infinity ? 0 : minLen
}