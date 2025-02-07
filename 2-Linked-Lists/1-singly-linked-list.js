class ListNode {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    insertNodeAtEnd(value) {
        this.tail.next = new ListNode(value);
        this.tail = this.tail.next;
    }

    removeNode(index) {
        let currentNode = this.head;
        let i = 0;
        while (i < index && currentNode != null) {
            currentNode = currentNode.next;
            i++;
        }
    }
}