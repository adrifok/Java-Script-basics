//How to add or remove elements in a stack (LIFO pattern)

class Node {
    constructor (value){
      this.value = value
      this.next = null
    }
  }
      class Stack{
      constructor(){
      this.first = null
          this.last = null
          this.size = 0
    }
    
          push(val){
        var node1 = new Node (val)
        if(!this.first){
          this.first = node1
          this.last= node1
        }else{
          var temp = this.first
          this.first = node1
          this.first.next = temp
        }
        return this.size++
      }
  
       pop(){
    if(!this.first) return null;
    var temp = this.first;
    if(this.first === this.last){
      this.last = null
    }
    this.first = this.first.next;
    this.size--
    return temp.value
  }
  }
    
  const stck = new Stack
  
  stck.push('value1');   //1
  stck.push('adri2');    //2
  stck.push('value3');   //3
  
  console.log(stck.first); //Node {value: 'value3',next: Node {value: 'adri2',next: Node {value: 'value1', next: null,__proto__: { constructor: ƒ Node() }}},['__proto__']: { constructor: ƒ Node()} 
  console.log(stck.next); //undefined
  console.log(stck.last);    //Node {value: 'value1',next: //null,__proto__: { constructor: ƒ Node() //}
  //}
  console.log(stck.size);		//3
  
  stck.push('value4');			//4
  
  stck.pop();									//'value4'
  console.log(stck.pop());   //'value3'
  stck.size;   //2

//font: freecodecamp.org/news/data-structures-in-javascript-with-examples#stacks
//by German Cocca
