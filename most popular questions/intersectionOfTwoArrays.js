// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
 

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?


 // Time Complexity: O(m + n)
// Space Complexity: O(max(m, n))

var intersect = function(nums1, nums2) {
    let map = new Map()
    let result = []
    
    //count numbers in nums1
    for(const num of nums1){
        map.set(num, map.get(num) + 1 || 1)
    }
    
    //check nums2
    for (let i = 0; i < nums2.length; i++) {
        //if there is such number in nums1, push it in the result array
        if (map.get(nums2[i]) > 0) {
            result.push(nums2[i]);
            map.set(nums2[i], map.get(nums2[i]) -1);
        }
    }
    return result;
};


// What if the given array is already sorted? How would you optimize your algorithm?

 // Time Complexity: O(min(m, n))
// Space Complexity: O(1)
var intersect = function(nums1, nums2) {
    let i = 0
    let j = 0
    let result = []

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) j++;
        else if (nums1[i] < nums2[j]) i++;
        else {
            result.push(nums1[i]);
            i++
            j++
        }
    }
    return result;
}