// const {
    // LinkedList,
    // Queue,
    // BinarySearchTree
// } = require('../DS.js')
//COMO ORDENAR UNA LISTA
function LinkedList() {
    this.head = null;
  }

var miLista = new LinkedList()
miLista.add(5);
miLista.add(4);
miLista.add(3);
miLista.add(2);
miLista.add(1);

// console.log(miLista);
// console.log(miLista.head.next);
// console.log(miLista.head.next.next);

LinkedList.prototype.ordenar = function(){
    var arrayDatos =[];
        var current = this.head;
        if(!current)return false;
            while(current) {
                arrayDatos.push(current.value)
                current = current.next
        }
                arrayDatos.sort(function(a,b){
                    return a - b;
                })
                var nuevaLista = new LinkedList();
                arrayDatos.forEach(function(ele){
                    nuevaLista.add(ele)
                        
                })
                return nuevaLista;
        }
        var listaOrdenada = miLista.ordenar();
        console.log(miLista);
        console.log(listaOrdenada)
        console.log(listaOrdenada.head.next);
        console.log(listaOrdenada.head.next.next);
        

