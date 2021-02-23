// You are given two integer arrays nums1 and nums2 both of unique elements, where nums1 is a subset of nums2.

// Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, return -1 for this number.

 

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation:
// For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
// For number 1 in the first array, the next greater number for it in the second array is 3.
// For number 2 in the first array, there is no next greater number for it in the second array, so output -1.

// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation:
// For number 2 in the first array, the next greater number for it in the second array is 3.
// For number 4 in the first array, there is no next greater number for it in the second array, so output -1.

 

// Constraints:

//     1 <= nums1.length <= nums2.length <= 1000
//     0 <= nums1[i], nums2[i] <= 104
//     All integers in nums1 and nums2 are unique.
//     All the integers of nums1 also appear in nums2.

 
// Follow up: Could you find an O(nums1.length + nums2.length) solution?

var nextGreaterElement = function(nums1, nums2) {
  const map = new Map();
  
  for (let i = 0; i < nums2.length; i++) {
      let val = -1;
      
      for (let j = i + 1; j < nums2.length; j++) {
          if (nums2[j] > nums2[i]) {
              val = nums2[j];
              break;
          }
      }
      
      map.set(nums2[i], val);
  }
  
  return nums1.map((item) => map.get(item));
};