class LinkedList {

    // Every element knows about the next element
    constructor() {
        this.head = null; // First element of the list
        this.tail = null; // Last element of the list
    }

    append(value) {
        const newNode = {value: value, next: null};
        
        if(this.tail) {
            this.tail.next = newNode;
        }       
        this.tail = newNode; 

        if(!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = {value: value, next: this.head};
        this.head = newNode;
    }

    inserAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if(existingNode) {
            const newNode = {value: value, next: existingNode.next};
            existingNode.next = newNode;
        }
    }

    find(value) {
        if (!this.head) return;

        let curNode = this.head;

        while(curNode) {
            if(curNode.value === value) return curNode;

            curNode = curNode.next;
        }

        return null;
    }

    delete(value) {
        if (!this.head) {
            return;
        }

        while(this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let curNode = this.head;

        while(curNode.next) {
            if(curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }

        if (this.tail === value) {
            this.tail = curNode
        }
    }

    toArray() {
        const elements = [];
        let curNode = this.head;
        while(curNode) {
            elements.push(curNode)
            curNode = curNode.next;
        }

        return elements
    }

}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append("Hello World");
linkedList1.append("Juline");
linkedList1.append(18.4);
linkedList1.append(true);
linkedList1.prepend("First Value");

console.log(linkedList1.toArray());

linkedList1.delete("Juline")

console.log(linkedList1.toArray());

console.log(linkedList1.find("Juline"));
console.log(linkedList1.find("First Value"));

// add a new element
linkedList1.inserAfter("Kataleko", "First Value")
console.log(linkedList1.toArray());