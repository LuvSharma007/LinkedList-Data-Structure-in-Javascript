// Linked List 


// we will start by defining a Node class that will represent each node in the list. Each node should have a value and a next property that points the the next node in the list.


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// we can move onto our LinkedList class, which is going to contain a head property that points to the first node in the list.


class LinkedList{
    constructor(){
        this.head = null;
    }

// The first thing we’ll implement on our linked list is the ability to insert a new node. To do this, we’ll define an insert() method, which will take a data as an argument, creating a new Node with the value, adding it to the end of the list. Let’s add it to the LinkedList class from above


    insert(data){
        const newNode = new Node(data);
        
        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){              // until current is null
            current = current.next;
        }

        current.next = newNode;
    }

//  The next operation we want to implement is traversing the list. Traversing the list means iterating through each node in the list. Let’s implement this on our LinkedList class.


    traverse(){
        let current = this.head;
        while(current){                    // until current is null
            console.log(current.data);
            current = current.next;
        }
    }
     
// The delete() method first checks if the head is null. If it is, it returns since there are no nodes in the list. If the head’s value is equal to the value we want to delete, it sets the head to the next node in the list, effectively removing the first node.

// If the head’s value is not equal to the value we want to delete, it iterates through the list until it finds the first node with the value we want to delete and removes it by setting its next property to the next node in the list.


    delete(data){
        if(!this.head){
            return;
        }

        if(this.head.data === data){
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        while(current.next){
            if(current.next.data === data){
                current.next = current.next.next;
                return;
            }

            current = current.next;
        }
    }
}

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

list.delete(3);

list.traverse();