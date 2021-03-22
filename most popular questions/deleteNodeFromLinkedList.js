// // 

// // SOLUTION: 
// The usual way of deleting a node node from a linked list is to modify the next pointer of the node before it, to point to the node after it.
// Since we do not have access to the node before the one we want to delete, we cannot modify the next pointer of that node in any way. Instead, we have to replace the value of the node we want to delete with the value in the node after it, and then delete the node after it.
// Because we know that the node we want to delete is not the tail of the list, we can guarantee that this approach is possible.

// O(1)

var deleteNode = function(node) {
    // re-assign value of the node which has to be deleted to the next node
    node.val = node.next.val;
    // re-assign pointer of the node which has to be deleted to the next node
    node.next = node.next.next;
};