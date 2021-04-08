// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(n)

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){0
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

//// Pushing
//the function should accept a value
//create a new node with that value
// if there are no nodes in the stack, set the first and last property to be the newly created node
// if there is at least one node, create a var that stores the current first property on the stack
// reset the first property to be the newly created node
// set the next property on the node to be previously created var
// increment the size of the stack by 1

//// Popping
// if there are no nodes in the stack return null
// create a temp var to store the first property on the stack
// if there is only 1 node, set the first and last property to be null
// if there is more than one node, set the first property to be next property on the current first
// decrement size by 1
// return the value of the node removed
