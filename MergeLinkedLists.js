/**
 * Write a function that will merge two linked lists.
 * 
 * Example: 
 * 1 -> 3 -> 5
 * 2 -> 4 -> 6
 * 
 * Output: 
 * 1 -> 2 -> 3 -> 4 -> 5 -> 6
*/


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    if (!this.head) this.head = new Node(val);
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(val);
  }
}

const list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);

const list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);


function mergeLists(list1, list2) {
  let node1 = list1;
  let node2 = list2;

  // Alternate
  let i = 0;

  while (node1 && node2) {
    
  }
}