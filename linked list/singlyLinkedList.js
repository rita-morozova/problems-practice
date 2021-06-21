// Create Node.  It has a value and a pointer
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// var first = new Node('First Node')
// first.next = new Node('Second Node')
// first.next.next = new Node('Third Node')

class SinglyLinkedList{
    // Creates an empty list
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Insert value - O(1)
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Remove value - O(1) or O(n)
    pop(){
        // if there are no nodes - return undefined
        if(!this.head) return undefined;
        // start at very beginning
        var current = this.head;
        var newTail = current;
        // while there is another node, tail set to current, current moved forward
        while(current.next){
            newTail = current;
            current = current.next;
        }
        // tail is moved too; after tail there is nothing else
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // Handle empty line of nodes
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // Remove node at the beginning
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    // Add node at the beginning
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // Retrive Node by its position - O(n)
    get(index){ //should accept index
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    // Change the value of a node, based on its position
    set(index, val){ //accepts index and value
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    // Insert a new node, instead updating -O(1)
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    // Reverse in place - a common interview problem!
    // we need current, next and previous
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null; //need to make sure tail.next is null
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }
      // Print shows that reverse() is working
      print(){
          var arr = [];
          var current = this.head
          while(current){
              arr.push(current.val)
              current = current.next
          }
          console.log(arr);
      }
}

var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")


