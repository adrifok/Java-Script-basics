
/*Double Linked Lists
In double linked lists have their nodes connected trhough pointers with both the previous and the next value(they
    consumes more memory than single lists)*/

//We create a class for each node within the list
    class Node {
        //Each node has 3 properties: values, previous pointer and next pointer
        constructor(val){
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    }

//We create a class for the list
    class doublyLinkedList {
        //the lis has 3 properties: head, tail and size
        constructor(){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
//the push method takes a value as parameter and assigns it as the tail of the list
        push(val){
            let node1 = new Node(val)
            if(this.length === 0){
                this.head = node1;
                this.tail = node1;
            }else{
                this.tail.next = node1
                node1.prev = this.tail
                this.tail = node1
            }
            return this.length++
        }
//the pop method removes the tail of the list
        pop(){
            if(!this.head) return undefined;
            let poppedNode = this.tail
            if (this.length === 1){
                this.head = null
                this.tail = null
            }else{
                this.tail = poppedNode.prev
                this.tail.next = null
                poppedNode.prev = null
            }
            this.length--
            return poppedNode;
        }
//the shift method removes the head of the list
        shift(){
            if(this.length === 0) return undefined;
            let oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }          
        this.length--
        return oldHead;
        }
        
//the unshift method takes a value as parameter and assigns it at the head of the list
        unshift(val){
            const node1 = new Node(val)
            if(this.length === 0){
                this.head = node1
                this.tail = node1
            }else{
                this.head.prev = node1
                node1.next = this.head
                this.head = node1
            }
            return this.length++
        }

//the get method takes an index number as parameter and returns the value of the node at that index
        
        get(index){
            if(index < 0 || index >=index.length) return null;
            let count, current;
            if(index <= this.length/2){
                count = 0
                current = this.head
                while(count !== index){
                    current = current.next
                    count++
                }
            }else{
                count = this.length -1
                current = this.tail
                while(count !== index){
                    current = current.prev
                    count--
                }
            }
                return current;
        }
//the set method takes an index number and a value as parameters and modifies the node value at the given index in the list

        set(index, val){
            var foundNode = this.get(index)
            console.log(this);
            if(foundNode !=null){
                foundNode.val = val
                return true;
            }
            return false;
        }

//the insert method takes an index number and a value as parameters and inserts the value at the given index in the list
        insert(index, val){
            if(index < 0 || index > this.length) return false
            if(index === 0) return !!this.unshift(val)
            if(index === this.length) return !!this.push(val)

            var node1 = new Node(val)
            var beforeNode = this.get(index -1)
            var afterNode = beforeNode.next

            beforeNode.next = node1, node1.prev = beforeNode
            node1.next = afterNode, afterNode.prev = node1
            this.length++;
            return true
        }
    }

            let listaDoble = new doublyLinkedList
            listaDoble.push('valor1');
            listaDoble.push('adri2');
            listaDoble.push('valor3');
            listaDoble.push('adri4');
            //console.log(listaDoble); //doublyLinkedList {head: <ref *1> Node {val: 'valor1',next: Node { val: 'adri2', 
            //next: [Node], prev: [Circular *1] },prev: null },tail: <ref *2> Node {val: 'valor3',
            //next: null,prev: Node { val: 'adri2', next: [Circular *2], prev: [Node] }},length: 3}
            //console.log(listaDoble.length); //3

            //listaDoble.pop();
            //console.log(listaDoble); //doublyLinkedList {head: <ref *1> Node {val: 'valor1', next: Node { val: 'adri2', 
            //next: null, prev: [Circular *1] },prev: null},tail: <ref *2> Node {val: 'adri2',next: null,
            //prev: <ref *1> Node { val: 'valor1', next: [Circular *2], prev: null }},length: 2}
            //console.log(listaDoble.length); //2
            //listaDoble.shift();
            //console.log(listaDoble); //doublyLinkedList {head: <ref *1> Node {val: 'adri2',next: Node { val: 'valor3', 
            //next: null, prev: [Circular *1] },prev: null},tail: <ref *2> Node {val: 'valor3',next: null,
            //prev: <ref *1> Node { val: 'adri2', next: [Circular *2], prev: null }},length: 2}
            //console.log(listaDoble.length)   //2

            //listaDoble.unshift('valor4');
            //console.log(listaDoble); //(HEAD valor4---valor1----adri2--->TAIL adri2---valor3---null)
                                     //doublyLinkedList {head: <ref *1> Node {val: 'valor1',next: Node { val: 'adri2', next: [Node], prev: [Circular *1] },
                                    //prev: Node { val: 'valor4', next: null, prev: null }tail: <ref *2> Node {val: 'valor3',next: null,
                                    //prev: Node { val: 'adri2', next: [Circular *2], prev: [Node]}},length: 4}
            
                                    //console.log(listaDoble.length); //4
            //listaDoble.get('2');
            //console.log(listaDoble);

            //listaDoble.get(2, 'adri6');
            //console.log(listaDoble);
            
             listaDoble.set(10, 'valor7');
             console.log(2,'valor7')
             console.log(listaDoble);

             listaDoble.insert(1,'adri8');
             console.log(listaDoble);
           


//font 