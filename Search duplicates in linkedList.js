
LinkedList.prototype.simplifyList = function () { 
  // Tu código aca:
      //listaSimple = new LinkedList();
      if(!this.head) return false;// retorna false si l
      let current = this.head;
      let visited = new Set([current.value]);
      while (current.next) {
        let nextnode = current.next;
        if (visited.has(nextnode.value)) {
          // if current node value (or data) is visited, skip
          current.next = nextnode.next;
        } else {
          // if current node value is not visited, visit
          visited.add(nextnode.value);
          current = nextnode;
        }
      }
        return;
    }


// prepare data
const arr = [1, 2, 1, 3, 4, 2, 1];
let head, prevNode;
while (arr.length > 0) {
  let node = new Node(arr.pop());
  if (prevNode) {
    node.next = prevNode;
  }
  head = node;
  prevNode = node;
}

// remove duplicate
const headAfterRemove = removeDuplicates(head);

// verify result
let cursor = headAfterRemove;
while (cursor) {
  console.log(cursor.data);
  cursor = cursor.next;
}
//---------------------------------------------------------

var deleteDuplicates = function(head) {
    // sets current node to be head of list
    let current = head
    // runs until we are at the end of the list
    while (current !== null && current.next !== null) { 
        // checks to see if the current value and the next value are the same
        if (current.val === current.next.val){  
            // skips over the duplicate and the next value becomes 2x next
            current.next = current.next.next            
            // current value and the next value are not the same
        } else {  
            // moves to the next node on the list to run through the while again
            current = current.next 
        }
    
    }
    // returns the linked list with no duplicates
    return head  
    
};
//-------------------------------------------------------------------
