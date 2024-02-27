class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        let node = new Node(value);
        if (!this.bottom) {
            this.bottom = node;
            this.top = this.bottom;
            this.length++;
            return this.top;
        }
        let pointerToTop = this.top;
        pointerToTop.next = node;
        this.top = node;
        this.length++;
        return this.top;
    }
    pop() {
        if (this.length === 0) {
            return "nothing to pop";
        }
        if (this.length === 1) {
            this.bottom = null;
            this.top = this.bottom;
            this.length--;
            return;
        }
        let counter = 1;
        let currentNode = this.bottom;
        while (counter < this.length - 1) {
            currentNode = currentNode.next;
            counter++;
        }
        currentNode.next = null;
        this.top = currentNode;
        this.length--;
        return currentNode;
    }
    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}


let stack = new Stack();
stack.push("zabih")
stack.push("ali")
stack.pop()
stack.pop()
console.log(stack);



