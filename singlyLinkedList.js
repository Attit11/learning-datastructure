class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    /* 
    ------- PseudoCode for Singly Linked list Push operation
    1. This function should accept a value
    2. Create a new node using the value passed to the function
    3. If there is no head property in the list, set the head and tail be the newly created one.
    4. Otherwise, set the next property on the tail to be the new jnode and set the tail property on the list to be the newly created node.
    5. Increment the length by one
    */
    push (val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("From")
list.push("The")
list.push("Other")
list.push("Side")
list.push("Of")
list.push("The")
console.log(list.push("Moon"))
