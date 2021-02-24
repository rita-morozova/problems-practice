// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

// Example:

// Input:
// [1,2,3]

// Output:
// 3

// Explanation:
// Only three moves are needed (remember each move increments two elements):

// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

// Accepted
// 87,175
// Submissions
// 171,555

var minMoves = function(nums) {
  nums.sort((a, b) => b - a)

  let moves = 0

  let index = 1
  while (index < nums.length) {
    moves += (nums[index - 1] - nums[index]) * index
    ++index
  }

  return moves
};