# Given an array of integers, find if the array contains any duplicates.

# Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

# Example 1:

# Input: [1,2,3,1]
# Output: true

# Example 2:

# Input: [1,2,3,4]
# Output: false

def contains_duplicate(nums)  
  return nums === nums.uniq ? false : true
end