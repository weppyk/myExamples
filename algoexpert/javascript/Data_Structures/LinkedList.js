class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
    constructor() {
        this.head = null;
        //this.tail = null;
        //this.size = 0;
    }

    addStart(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    addEnd(value) {
        const node = new Node(value);
        let curr = this.head;
        if (curr == null) {
            this.head = node;
            return;
        }
        while (curr != null && curr.next != null) {
            curr = curr.next;
        }
        curr.next = node;
    }
}

const list = new LinkedList();
list.addStart(1);
list.addStart(2);
list.addEnd(3);

console.log(list);
console.log(list.head.value);
console.log(list.head.next.value);
console.log(list.head.next.next.value);
