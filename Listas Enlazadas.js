    /* Fuente students.soyhenry.com/classes/5?cohortID=18 */                
                                        
                                        // Head representa la dirección de memoria del PRIMER elemento de la Lista---> Head es un Nodo. 
                                        //Los Nodos son el camino a recorrer.
    function Node(data){                // La Lista contiene Next y Data:
                                        // Next describe la posicion de memoria del prox elemento de la lista
                                        // Data es la informacion que alojamos en dicha posicion. Data es solo una partecita del Nodo.
    this.data = data;                   //data y next son nombres por convencion(le puedo llamar con cualquier otro nombre, 
    this.next = null;                   //ej 'el proximo nodo', 'el datito')
    }

function LinkedList() {
    this.length = 0;
    this.head = null;
}
                                            //Como creo una nueva Lista? con un Constructor o con una Clase
    let list = new newLinkedList;           //Esto es agregar un Nodo 

    function newLinkedList();
    LinkedList.prototype.add = function(data){ 
        let node = newNode(data);       //creamos un nuevo Nodo

        let current =this.head;        // this va a ser la instancia de la Linked list a la cual le aplico el metodo, en este caso: LinkedList
        if(current===null){             //puedo o no tener informacion en el head, si esta vacio(null) no entro 
                                        // aca estoy en un caso en el que no tengo un nodo asociado al head por lo tanto --> null
                                        // por lo tanto list --->  null   
        this.head = node;               //ahora this.head ve el primer nodo y lo asocia ---> this.head = node 

        }                                   
        while(current.next){             //current es el nodo y mientras que while.current.next sea distinto de null(o sea si ya tengo un dato) 
        current = current.next;          //voy al proximo Nodo avanzando/recorriendo a lo largo de la lista(Next me permite seguir avanzando)
        }        
        current.next = node;             //next apunta al nuevo nodo
    }
                    /* Como elimino un Nodo?
    list .remove ---> quiero eliminar el ultimo Nodo. Para esto apuntamos al penultimo Nodo 
    (current.next es el ultimo) porque solo puedo ver hacia adelante
    Si quiero eliminar un Nodo en la 2da posicion (delete(1)) 
    para eso tengo que reemplazar la posicion  del nodo0 y elimino el current.next y tengo que eliminar la info asociada 
    creando una variable auxiliar (let aux = current.next) para guardar la info/
    Me tengo que quedar con una copia de lo que tengo para poder avanzar sin perder informacion*/

LinkedList.prototype.remove = function(){
   if (!this.head) return null;
    if(!this.head.next){ 
       let current = this.head.value                     //si solamente hay un nodo
                                                         //retorno su valor
       this.head = null;
       return current;
    }else{
     let current = this.head;
     while(current.next.next !== null){                    //mientras que el siguiente (va avanzando) sea distint
       current = current.next;
     }
           let capturarData = current.next.value; //capturo el valor del nodo siguiente al nodo delante de mi par
           current.next = null;
           return capturarData;
    }
   }      






