// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

var deleteDuplicates = function(head) {
    //start with the 1st element
    let current = head
    
    while (current !== null && current.next !== null){
        
        //check if current value === current next value
        if(current.val === current.next.val){
            
            //if so, resassign pointer to the node+1
            current.next = current.next.next
        } else {
            //move to next node and check again
            current = current.next
        }
    }
    
    return head
};
