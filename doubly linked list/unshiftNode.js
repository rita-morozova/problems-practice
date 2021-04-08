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
      unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

// create a new node with the value passed to the function 
// if the length is 0 set the head to be the new node; set the tail to be the new node
// otherwise set the pre property on the head of the list to be the new node
   // set the next property on the new node to be the head of the property
   //update the head to be the new node
// increment the length
//return the list   