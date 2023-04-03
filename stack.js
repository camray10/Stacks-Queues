/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
  }

  pop() {
    if (!this.first) {
      throw new Error('Stack is empty');
    }

    const removedNode = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;

    return removedNode.val;
  }

  peek() {
    if (!this.first) {
      return null;
    }

    return this.first.val;
  }

  isEmpty() {
    return this.size === 0;
  }
}


module.exports = Stack;
