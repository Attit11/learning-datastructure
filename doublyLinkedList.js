 class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    /*
    Pseudocode for Pushing
    1. Create a new node with the value passed to the function.
    2. If the head property is null set the head and tail to be the newly created node.
    3. If not set the next property on the tail to be that node.
    4. Set the previous property on the newly created node to be the tail.
    5. Increment the length.
    6. Return the Doubly Linkeed List.
    */

    push(val){
        var newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
     
}

let newlist = new DoublyLinkedList();

console.log("----------- Push to doubly linked list ----------------")
console.log(newlist.push("This is the first one!"))
console.log(newlist.push("This is the second one!"))
console.log(newlist.push("This is the first one!"))
console.log("-------------------------------------------------------")
