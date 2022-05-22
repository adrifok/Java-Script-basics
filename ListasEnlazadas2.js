

/*      Estructuras de Datos en forma de Listas -Clase Estructura de Datos II-WebFT17b Bryan Camilo Pineda (Henry ModuloI)

La lista alberga Nodos (todo tipo de data). Contiene un tamaño (_length) (el guion bajo es una convencion para 
    que no se modifique el tamaño) y un apuntador al inicio (head)*/
    function List(){        //es una Clase
        this._length = 0;   
        this.head = null;    //por defecto el inicio de la lista esta en null
    }
/*Se puede 
-Iterar sobre una lista para buscar elementos dentro de cada nodo.
-Insertar un nodo al inicio, medio o final de la lista.
-Remover un nodo al inicio o al medio de la lista.*/

        function Node(data){
            this.data = data;
            this.next = null;
        }
        var lista1 = new List();          //creo una nueva lista. Es una instancia nueva de Lista    
        var nodo1 = new Node("adri");     //creo un nuevo nodo. Es una instancia nueva de Node   
        console.log(lista1);                             //List { _length: 0, head: null }    }   
        console.log(nodo1);                              //Node { data: 'adri', next: null }   

        List.prototype.add = function (data) {        //agregar elementos a la lista con add
            var node = new Node (data);              //instancio un nuevo nodo para enviar data
            let current = this.head;                 //this. apunta a la lista. Creo una variable current que apunta al head de la lista
            if(!current){                            //pregunto current es false?(!=null) para saber si esta vacia   
                this.head = node;                    //entonces puedo crear un nodo
                this._length++;                       //aumentar el tamaño de la lista en uno
                return node;
            }
            //Si la lista no esta vacia recorre hasta encontrar el ultimo vacio (null) para agregar el nuevo nodo
            while (current.next){              //mientras en el next haya algo haz que el current (apuntador) apunte al siguiente
            current = current.next             //enlazo el nuevo nodo donde haya un null al final
            } 
            current.next = node;     
            this._length++; 
            return node;
     }   
            //Metodo getAll (es un console.log que trae todos los elementos de la lista)
            List.prototype.getAll = function(){
                let current = this.head //empezamos a recorrer en el inicio
                if(!current){           //si la lista esta vacia
                  return console.log('La lista esta vacia')
                   
                }
                while(current){     //si la lista tiene elementos....console.log
                   return console.log(current.data);
                    current = current.next
                }
            

                lista1.add(3);                   //
                console.log(lista1);             //List { _length: 1, head: Node { data: 3, next: null } } El length ya tiene tamaño 1 y el 
                                                //  head ya no apunta a null. Apunta al nuevo nodo.
                var lista1 = new List();
                lista1.add({
                    alumno : {
                    Cedula : 123456,
                    nombre : 'Juan'
                    }
                })
            
                console.log(lista1);//List {
                                    // _length: 1,
                                    // head: Node { data: { alumno: [Object] }, next: null }}
                lista1.getAll();    //List { _length: 0, head: null }
                                    //Node { data: 'adri', next: null }
                }