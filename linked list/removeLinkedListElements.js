// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

// 1st - if linked list consist of only 1 element && === val, return null
// 2nd - if node that === val is not last, set its value and next pointer to the next 
// one, so this node is removed
// 3rd -if node === val is last node, when set prevNode pointer to null

var removeElements = function(head, val) {
  let start = head
  let previousNode = null
  
  while(head){
      //check 1st element in the list
      if(head.val === val){
          //if node with matching value is not last, we want to remove 1st element
          if(head.next){
              let nextNode = head.next
              head.val = nextNode.val
              head.next = nextNode.next
              continue
          }else{
              //if Node with matching value is the last, but not 1st
              if(previousNode){
                  previousNode.next = null
              }else{
                  //if there is only 1 element and it === val
                  return null
              }
          }
      }
      previousNode = head
      head = head.next
  }
  return start
  
};

// var removeElements = function(head, val) {
//   // The linked list may be empty
//     if (head === null) {
//         return head;
//     }
    
// 	// First, handle the head with the matched val and remove it
//     while (head !== null && head.val === val) {
//         head = head.next;
//     }
	
// 	// Then handle the remaining nodes' values
//     if (head !== null) {
//         let curr = head.next;
// 		// A pointer that actually modifies the linked list
//         let prev = head;
        
//         while (curr !== null) {
//             if (curr.val === val) {
//                 prev.next = curr.next;
//             } else {
//                 prev = curr;
//             }
            
//             curr = curr.next;
//         } 
//     }
    
//     return head;
    
// };