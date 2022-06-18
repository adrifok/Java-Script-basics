
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //tu código:
     if(array.length === 1) return array;                   //si esta ordenado se devuelve el array tal cual esta (caso base de corte

     let mid = Math.floor(array.length / 2);                    //divido el array al medio con redondeo 
     let left = array.slice(0, mid);                            //rebano el array desde la psosicion 0 al medio que defini con mid
     let right = array.slice(mid);                            //rebano desde el mid en adelante hacia la derecha
     return merge(mergeSort(left),mergeSort(right));        //invoco la funcion merge (unir) pasandole left y right   
          }
     function merge(left, right){                                                //aplico recursion
      let leftIndex = 0;
      let rightIndex = 0;
      let arrOrdered =[];
      while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[leftIndex]){
          arrOrdered.push(left[leftIndex]);
          leftIndex++;
        }else{
          arrOrdered.push(right[rightIndex]);
          rightIndex++;
        }
        }
        return arrOrdered.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
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
