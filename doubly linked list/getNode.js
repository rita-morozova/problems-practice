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
     get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
}

// if the index is less than 0 or greater or equal to the length, return null
// if the index is less than or equal to half the length of the list
  // loop through the list starting from the head and loop towards the iddle
  //return the node once its found
// if the index is greater than half the length of the list
  // loop through the list starting from the tail and loop towards the middle 
  //return the node once its found 



