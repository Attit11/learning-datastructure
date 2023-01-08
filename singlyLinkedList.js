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

    /*
    ------- Pseudocode for Singly Linked List Unshift operation (ADDITION FROM FIRST)
    1. This function should accept a value.
    2. Create a new node using the value passed to the function.
    3. If there is no head property on the list, set the head and tail to be the newly created one.
    4. Otherwise, set the newly created nod's nect property to be the current head property on the list.
    5. Set the head property on the list to be the newly created node.
    6. Increment the length of the list by 1.
    7. Return the linked list.
    */

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }


    /* 
    ------- Pseudocode for Singly Linked List Get operation (FINDING SPECIFIC NODE FROM THE LIST)
    1. This function should accept an index.
    2. If the index is less than zero or greater than or equal tp the length of the list return null.
    3. Loop through the list until you reach the index and return the node at the specific index.
    */
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current

    }

    /*
    ------- Pseudocode for Singly Linked List Set operation (EDITING SPECIFIC NODE FROM THE LIST)
    1. This function should accept a value and an index
    2. Use your get function to find the specific node.
    3. If the node is not found, return false.
    4. If the node is found, set the value of that node to be the value passed to the dunction and return true.
    */
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val
            console.log("THIS IS FROM SET METHOD", this)
            return true
        }else{
            return false
        }
    }

    /*
    ------- Pseudocode for Singly Linked List Insert operation (INSERTING SPECIFIC NODE FROM THE LIST)
    1. If the index is less than zero or greater than the length, return false.
    2. If the index is the same as the length, push a new node to the end of the list.
    3. If the index is 0, unshift a new node to the start of the list.
    4. Otherwise, using the get method, access the node at the index - 1.
    5. Set the next property on that node to be the new node.
    6. Set the next property on the new node to be the previous next.
    7. Increment the length.
    8. Return true.
    */

    insert(index, val){
        if(index < 0 || index > length) return false
        if(index === this.length){
            this.push(val)
            return true
        }
        if(index === 0){
            this.unshift(val)
            return true
        }
        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
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

console.log("-------------------------------------------------")
console.log("Shifting from the list")
console.log(list.shift())

console.log("-------------------------------------------------")
console.log("Unshifting from the list")
console.log(list.unshift("Pink Floyd!"))

console.log("-------------------------------------------------")
console.log("Get the specific index")
console.log(list.get(3))

console.log("-------------------------------------------------")
console.log("set at the specific index")
console.log(list.set(0, "Hello"))

