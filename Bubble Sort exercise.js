function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro.
    // Devolver el array ordenado resultante.
    // Tu código:
  
    let swap = true;                                 //mientras se pueda seguir swapeando entre 2 valores, ir a un while. 
                                                        //Si en algun momento hacemos un swap lo pasamos a true
      while(swap){                    
       swap= false;                  // se declara un false para que swap no entre en un loop infinito y se detenga la ejecucion.
         for (let i = 0; i < array.length -1 ; i++) {     //array.length -1 porque voy hacia la izquierda buscando el //
                                                          //menor valor(pero lo toma de todos modos)
              if(array[i] > array[i+1]){            //si se da esta condicion, swapeo
              let aux = array[i];                   //guardo el resultado del swap de la comparacion en una variable auxiliar
              array [i] = array [i+1];              //comparo la posicion i con la siguiente posicion de la derecha
              array[i+1] = aux;                     //guardo el valor en la variable auxiliar
              swap = true;                          //cuando no hay mas swap posible, ejecucion terminada
          }
       }
    }
              return array;
          }
  