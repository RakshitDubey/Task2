class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insertion at the end of the list
    insert(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Deletion of a node
    delete(data) {
      if (!this.head) return;
  
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
  
    // Searching for an element
    search(data) {
      let current = this.head;
      while (current) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    // Reversing the linked list
    reverse() {
      let prev = null;
      let current = this.head;
      while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
      }
      this.head = prev;
    }
  
    // Print the linked list
    print() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.data + ' ';
        current = current.next;
      }
      console.log(result.trim());
    }
  }
  
  // Example usage:
  const list = new LinkedList();
  list.insert(1);
  list.insert(2);
  list.insert(3);
  list.insert(4);
  list.insert(5);
  
  console.log('Original linked list:');
  list.print(); // Output: 1 2 3 4 5
  
  list.reverse();
  
  console.log("Reversed linked list")
  