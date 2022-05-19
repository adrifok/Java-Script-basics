/*Selection Sort exercise

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
      for (let i = 0; i < array.length-1; i++) {
        let min = i;       
        for (let j = i + 1; j < array.length; j++) {                //j va una posicion por delante de i
          if (array[j] < array[min]  ){           
            //array[i+1] = array[j]                                 //swapeo los indices entonces min pasa a ser j
            min =j;
          }
        }                                                       
             if (i!== min){                                                                                         
            let aux = array[i];
            array[i] = array[min];
            array[min] = aux;                                     
                                                           
            }
          }
                return array;
}


*/