//QUEUE (FIFO pattern)

//Some examples of queue usage are:
//-background tasks
//-printing/task processing

//We create a class for each node within the queue
 class Node {  
    //each node has two properties, its value and a pointer that indicates the node that follows
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
//we create a class for the queue
  class Queue {
    //the queue has 3 properties: the 1st node, the last node and the stack size
    constructor (){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
//the enqueue method receives a value and adds it to the 'end' of the queue;

    enqueue(val){
        var node1 = new Node(val)
        if(!this.first){
            this.first = node1
            this.last = node1
        }else{
            this.last.next = node1
            this.last = node1
        }
        return this.size++;
    }
//the dequeue method eliminates the element at the 'beginning' of the queue and returns its value

    dequeue(){
        if(!this.first) return null;

        var temp = this.first
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next
        this.size--;
        return temp.value;
    }
}
        const quickQueue = new Queue;

        quickQueue.enqueue('value1')
        quickQueue.enqueue('adri2')
        quickQueue.enqueue('adri3')

        console.log(quickQueue.first)//Node { value: 'value1',next: Node { value: 'adri2', next: Node { value: 'value3', next: null } } }

        console.log(quickQueue.last) //Node { value: 'value3', next: null 
        console.log(quickQueue.size)  //3

        quickQueue.enqueue('value4')
        console.log(quickQueue.dequeue()) //value1


