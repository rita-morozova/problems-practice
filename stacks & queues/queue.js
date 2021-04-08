// Insertion O(1)
// Removal O(1)
// Searching O(n)
// Access O(n)

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

// Enqueue
// this function accepts some value 
// create a new node using taht value passed to the function
// if there are no nodes in the queue, set this node to be the first and last property of the queue
// otherwise set the next property on the current last to be that node, and then set the last
// property of the queue to be that node
// increment size by 1 and return

// Dequeue - remove from the beginning
// if there is no first property, just return null
// store the first property in a var
// see if the first is the same as the last (chek if there is only 1 node).
  // if so, set the first and last to be null
// if there is more than 1 node, set the first property to be the next property of first
// decrement size by 1
// return the value of the node dequeued  
