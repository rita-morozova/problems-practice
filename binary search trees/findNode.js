// start at the roor
// check if there is a root, if not - done searching
// if there is, check if the value of the new node is the value we are lookig,
//if found, we are done
// if not, check to see if the value is greater than or less than the value of the root
// if it's greater
  // check to see if there is a node to the right
    // if there is, move to that node and repeat the steps
    // if not, done

// if it is less 
  // check to see if there is a node to the left
    // if there is, move to that node and repeat
    //if not, done
    class Node {
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
    
    class BinarySearchTree {
        constructor(){
            this.root = null;
        }
        find(value){
            if(this.root === null) return false;
            var current = this.root,
                found = false;
            while(current && !found){
                if(value < current.value){
                    current = current.left;
                } else if(value > current.value){
                    current = current.right;
                } else {
                    found = true;
                }
            }
            if(!found) return undefined;
            return current;
        }
        contains(value){
            if(this.root === null) return false;
            var current = this.root,
                found = false;
            while(current && !found){
                if(value < current.value){
                    current = current.left;
                } else if(value > current.value){
                    current = current.right;
                } else {
                    return true;
                }
            }
            return false;
        }
    }
    
    
    //      10
    //   5     13
    // 2  7  11  16
    
    var tree = new BinarySearchTree();
 
    