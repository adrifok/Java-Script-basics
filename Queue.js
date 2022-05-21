                              //QUEUE-COLAS
//First In First Out (FIFO)

    var queue = [];
    queue.unshift(2);   //unshift agrega a la fila 
    queue.unshift(3);
    queue.unshift(4);
    queue.unshift(5);
    console.log(queue)    //[ 5, 4, 3, 2 ] 

    var element =queue.pop() //saco el ultimo elemento pero lo guardo en una variable para no perderlo
    console.log(element)  // 2
    console.log(queue)    //[ 5, 4, 3 ] el primero que entro es el ultimo que se fue (2)
    var element1 =queue.pop() //sigo quitando elementos del final de la lista                        
    console.log(queue)     // [ 5, 4 ]


