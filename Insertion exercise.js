 /*Insertion Algorithms
 
 function insertionSort(array) {
 // Implementar el método conocido como insertionSort para ordenar de menor a mayor
 // el array recibido como parámetro utilizando arreglos
 // Devolver el array ordenado resultante
 // Tu código:
     
 for (let i = 1; i < array.length; i++) {   //la iteracion comienza en el 2do elemento (pos 1). 
    //Pos 0 por default porque no se compara con nada anterior.
let aux = array[i];              // creo una variable current para guardar el resultado de cada iteracion
let j = i-1;
while ((j>= 0) && (aux< array[j])){  //recorro el array y muevo los elementos a la derecha,
    //abriendo un espacio para el elemento current a ser insertado.
    // este proceso se repite por cada iteracion hasta que el array este ordenado.
array[j+1] = array[j]
j--;
}
array[j + 1] = aux;
}
return array;
}*/