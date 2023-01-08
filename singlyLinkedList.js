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
    ------- PseudoCode for Singly Linked List Push operation
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

    /* 
    ------- Pseudocode for Singly Linked List Pop operation
    1. If there are no nodes in the list, return undefined.
    2. Loop through the list until you reach the tail.
    3. Set the next property of the 2nd to last node to be null.
    4. Decrement the length of the list by 1.
    5. Return the value of the node removed.
    */

    pop(){
        if(!this.head) return undefined;
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail
        this.tail.next = null
        this.length--;
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return this.head;
    }

    /* 
    ------- Pseudocode for Singly Linked List Shift operation (REMOVE FROM FIRST)
    1. If there are no nodes, return undefined.
    2. Store the current head property in a variable.
    3. Set the head property to be the current head's next property.
    4. Decrement the length by 1.
    */   

    shift(){
        if(!this.head) return undefined
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        return currentHead //this is what we took off
    }

}

var list = new SinglyLinkedList()
console.log("Pushing to the list")
list.push("Hello")
list.push("From")
list.push("The")
list.push("Other")
list.push("Side")
list.push("Of")
list.push("The")
console.log(list.push("Moon"))
console.log("-------------------------------------------------")
console.log("Popping from the list")
console.log(list.pop())



