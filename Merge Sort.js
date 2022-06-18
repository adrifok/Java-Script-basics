
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //tu código:
     if(array.length === 1) return array;                   //si esta ordenado se devuelve el array tal cual esta (caso base de corte

     let mid = Math.floor(array.length / 2);                    //divido el array al medio con redondeo (mid = mitad del array)
     let left = array.slice(0, mid);                            //rebano el array desde la posicion 0 al medio que defini con mid
     let right = array.slice(mid);                            //rebano desde el mid en adelante hacia la derecha
     return merge(mergeSort(left),mergeSort(right));        //retorno la funcion merge (unir) pasandole left y right   
          }
     function merge(left, right){                      //funcion adicional que recibe los dos arreglos y compara los valores a posicionar
      let array1 = 0;                               //left
      let array2 = 0;                               //right
      let arrOrdered =[];                                 ////array donde pusheo los valores ordenados
      while(array1 < left.length && array2 < right.length){
        if(left[array1] < right[array1]){          //si el array de la izq en posicion array1 es menor al arreglo de la der (array2)
          arrOrdered.push(left[array1]);           //al array ordenado le pusheo el array de la izq en la posicion array1
          array1++;
        }else{
          arrOrdered.push(right[array2]);           //si es mayor,al array ordenado le pusheo el array de la der en la posicion array2
          array2++;
        }
        }
        return arrOrdered.concat(left.slice(array1)).concat(right.slice(array2));     //retorno array ordenado y concatenado
}


Merge Sort Algoritmo    n*log2(n)

1.Divide el arreglo en 2 grupos exactamente iguales. En caso de nros impares se elige equilibrar el valor 
hacia un lado o hacia el otro. Aca no hay pivots.    codigo--> Math.floor(arr.length/2)
                                                  [9,2,4,5,1,8]
 2.Ordena recursivamente los 2 grupos.                                                 
                  [9,2,4]                                                           [5,1,8]
             [9,2] [4]                                                           [5,1]   [8]
         [9] [2]                                                                [5][1]   [8]
         Compara estos ultimos valores y coloca el menor adelante 
         [2,9]                                                                [1][5]
         concatena el [4]                                                  concatena el [8]  
        [2,4,9]                                                             [1,5,8]

3.Compara, ordena y une (o mergea) los dos grupos:
                [1,2,4,5,8,9]

4.Funciones que necesito para pasar a codigo:

1a. funcion que divida --> var myOwnSlice={}
1b. funcion que fusione  -->merge
1c. funcion que incluya 1a y 1b -->merge sort
 
*/
