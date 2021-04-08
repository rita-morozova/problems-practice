class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
       set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

// replace the value of the node at the index

// create a var which is the result of the get method at the index passsed to the function
  // if the get method returns a valid node, set the value of that node to be
  // the value passed to the function
  // return true 
// otherwise return false  