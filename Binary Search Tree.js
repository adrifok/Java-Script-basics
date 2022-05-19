/*Binary Search trees
// resolve estos ejercicios usando recursión

// Binary Search Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la op
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los 
function BinarySearchTree(value) {

    this.value = value;
    this.left = null;
    this.right = null;
    }
      //let tree = new BinarySearchTree()
      //testArr = [];

      BinarySearchTree.prototype.insert = function(valueToInsert){
          //if(this.value<=0) return null;
          //if (this.value >= valueToInsert) {
        
              if (this.value > valueToInsert){
                          //inserto el nodo a la izquierda porque tiene menor valor

            if (this.left == null){
                  this.left = new BinarySearchTree(valueToInsert);

                  }else{  //que pasa si this.value ya tiene un nodo?
                      
                        this.left.insert(valueToInsert);
                  }         
            }else{
                        //inserto el nodo a la derecha porque tiene mayor valor
                  if (this.right == null){
                      this.right = new BinarySearchTree(valueToInsert);
              }else{
                      this.right.insert(valueToInsert);
              }
          }
      };
      BinarySearchTree.prototype.contains = function(value){
              if (this.value === value) return true;                // si el arbol contiene (contains) un valor es ve
              //if ( this.left){                                      // reviso a la izq (ejecuto el metodo contains)
               if (this.left?.contains(value)) return true;          // si hay un valor('?') devuelve verdadero (true
              //}
              //if (this.right){                                      // reviso a la der (ejecuto el metodo contains)
              if (this.right?.contains(value)) return true;          // si hay un valor ('?') devuelve verdadero (tru
      
              return false;                                         // si no hay ningun valor (ni a la der ni a la iz
            };    
          
      BinarySearchTree.prototype.depthFirstForEach = function(cb, order = 'in-order'){
          switch(order){                                          
            case 'in-order':{
              this.left?.depthFirstForEach(cb, order);           //con el (?) compruebo si existe el left
              cb(this.value);                                    // 
              this.right?.depthFirstForEach(cb, order);          //con el (?) compruebo si existe el right
              break;
            }
        
            case 'pre-order':{
              cb(this.value);  
                this.left?.depthFirstForEach(cb, order);           //con el (?) compruebo si existe el left
                this.right?.depthFirstForEach(cb, order);          //con el (?) compruebo si existe el right
                break;
              }
            case 'post-order':{
              this.left?.depthFirstForEach(cb, order);             //con el (?) compruebo si existe el left
              this.right?.depthFirstForEach(cb, order);            //con el (?) compruebo si existe el right
              cb(this.value);         
                break;
            }
          }
        
      }
      BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []){ //aca defino queue porque cada nodo 
                                      //asi se comparte entre todos y se agrega y se quitan los nodos de la misma lis
          cb(this.value);                                 //llamo al callback del nodo donde estoy actualmente y le p
          if(this.left) queue.push(this.left);                  //si existe algo en el nodo de la izq (left) lo agreg
          if(this.right) queue.push(this.right);                //si existe algo en el nodo de la der (right) lo agre
          
          if(queue.length){                                     //pregunto si en la cola hay algun valor 
            queue.shift().breadthFirstForEach(cb, queue);    //si es asi, sale de la lista (shift) y le aplico la fun
          }                                                  //cuando no hay mas en fila devuelve un array con los va
      };


      BinarySearchTree.prototype.size = function(){
            let count = 1;                                  //si tengo un size de al menos signfica que hay un size(i
            if(this.left) count = count +  this.left.size()   //pregunto si en el nodo de la izq hay algo, si no le s
            if(this.right)count = count +  this.right.size()   //pregunto si en el nodo de la der hay algo, si no le 
            
            return count;
      }


*/