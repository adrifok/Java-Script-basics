
//Linked Lists examples (single linked and double linked lists)
/*linked lists are a type of data structures that store values in the form of a list. Within the list, each
value is considered a node, and each node is connected with the following value in the list(or null in the 
case the element is the last in the list) through a pointer.*/

//We create a class for each node within the list
class Node{
    //each node has 2 properties, its value and a pointer that indicates the node that follows
    constructor(value){
        this.value = value
        this.next = null
    }
}

//We create a class for the list
class SinglyLinkedList {
    //the list has 3 properties: head, tail and list size
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

//the push method takes a value as parameter and assigns it as the tail of the list
push(value){
    let node1 = new Node(value)
    if(!this.head){
        this.head = node1
        this.tail = this.head
    }else{
        this.tail.next = node1
        this.tail = node1;
    }
    return this.length++
}

//the pop method removes the tail of the list
pop() {
    if(!this.head) return undefined;
    let current = this.head
    let newCola = current
    while(current.next){
        newCola = current
        current = current.next
    }
    this.tail = newCola
    this.tail.next = null
    this.length--
    if(this.length === 0){
        this.head = null
        this.tail = null
    }
    return current;
}

//the shift method removes the head of the list

shift(){
    if(!this.head) return undefined;
    var currentHead = this.head
    this.head = currentHead.next 
    this.length--
    if (this.length === 0){
        this.tail = null
    }
    return currentHead
    }

// the unshift method takes a value as parameter and assigns it as the head of the list

unshift(value){
    let nodo1 = new Node(value)
    if(!this.head){
        this.head = nodo1
        this.tail = this.head
    }
    nodo1.next = this.head
    this.head = nodo1
    return this.length++
}

//the get method takes an index number as parameter and returns the value of the node at that index

get(index){
    if(index < 0 || index >= this.length) return null
    let counter = 0;
    let current = this.head
    while(counter !== index ){    // !== strict inequality
        current = current.next
        counter ++
    }
    return current 
}
//the set method takes an index number and a value as parameters, and modifies the node value at the given index in the list 

set(index, value){
        let nodo2 = this.set(index)
        if (nodo2){
            nodo2.value = value
            return true
        }
        return false;

    }
//console.log(this.nodo2) //undefined

//the insert method takes an index number and a value as parameters, and inserts the value at the given index in the list

insert(index, value){
    if (index <0 || index>this.length) return false;
    if (index === this.length) return !!this.push(value);   //  !! -> truthy 
    if (index === 0) return !!this.unshift(value)

    let nodo1 = new Node(value)
    let prev = this.get(index -1)
    let temp = prev.next
    prev.next = nodo1
    nodo1.next = temp
    this.length++
    return true;    
}

//the remove method takes an index number as parameter and removes the node at the given index in the list

remove(index){
    if (index < 0 || index > this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length -1) return this.pop()

    let previousNode = this.get(index -1)
    let removed = previousNode.next
    previousNode.next = removed.next
    this.length--
    return removed;
}

//the reverse method reverses the list and all pointers so that the head becomes the tail and viceversa

reverse(){
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    for (let i  = 0; i  < array.length; i ++) {
        next = node.next
        node.next = prev
        prev = node
        node = next
    }
        return this;
  }
}

 let listaDePrueba = new SinglyLinkedList
 listaDePrueba.push('valor1')
 listaDePrueba.push('adri2')
 listaDePrueba.push('valor3')
// console.log(listaDePrueba) //SinglyLinkedList { head: Node { value: 'valor1',next: Node { value: 'adri2', next: Node { value: 'valor3', next: null } } },tail: Node { value: 'valor3', next: null },length: 3 
// console.log(listaDePrueba.length) //3
// 
// listaDePrueba.pop()
// listaDePrueba.length;
// console.log(listaDePrueba)//SinglyLinkedList {head: Node { value: 'valor1', next: Node { value: 'adri2', next: null } },tail: Node { value: 'adri2', next: null },length: 2}/
// console.log(listaDePrueba.length)  //2
// 
// listaDePrueba.shift();
// listaDePrueba.shift();
// console.log(listaDePrueba) //SinglyLinkedList {head: Node { value: 'valor3', next: null },tail: Node { value: 'valor3', next: null },length: 1}
// console.log(listaDePrueba.length) //1
// 
//listaDePrueba.get('')
// listaDePrueba.get(current)
//console.log(index)

console.log(listaDePrueba) //(metodo reverse) SinglyLinkedList {head: Node { value: 'valor1', next: Node { value: 'adri2', next: [Node] } },tail: Node { value: 'valor3', next: null },length: 3}



//font 