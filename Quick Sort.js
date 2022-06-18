function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // //Tu codigo aqui:
      if(array.length <= 1 ) return array;

          let pivot =array[Math.floor(Math.random() * array.length)]; //defino el pivot que es la posicion 0                    
          let left = [];
          let right = [];
          let equals = [];
          for (let i = 0; array.length; i++) {  //recorro el arreglo
            
           if(array[i] <= pivot){  //si el arreglo en la posicion i es menor al pivot lo tiro a la izq
            left.push(array[i]);                   
           }else if
            (array[i] > pivot){    //si el arreglo en la posicion i es mayor al pivot lo tiro a la der
            right.push(array[i]);
            }else{
              equals.push(array[i]);
            }
          }
          
              return [].concat(quickSort(left).concat(equals).concat(quickSort(right))); // retorno los arreglos concatenados
                                                 //recursion del metodo quick sort y concatenacion de los dos arrays            
}


/* Algoritmo Quick Sort (log N) codigo explicado

Tengo un array:
[4, 3, 2, 6, 2, 1, 9]
          *      

1.busco un pivote de forma aleatoria (en este caso es el 6)      codigo para el pivot--> var pivot-->length/2 y math.Floor o Math.random de 0 a size de mi lista
2. busco dos sub arrays, una a la der(valores mayores) y otro a la izq (valores menores),   codigo-->2 arrays con recursion:if array.length<=1 retorno el array
les voy aplicando quick sort y los concateno--> arreglo en  orden. 
der = [9]         equals = [6]         izq =[4,3,2,2,1]
3. A la derecha vuelvo a aplicar el quick sort --> 9
4.equals = [6]
5. A la izq vuelvo a aplicar el quick sort --> Ahora mi pivote es el [3]
6. der = [4]
   equals = [3]
   izq = [2,2,1]
7. A la izq vuelvo a aplicar el quick sort --> Ahora mi pivote es el [1]
   der = [2,2]
   equals = [1]
   izq = [vacio]
8. A la izq vuelvo a aplicar el quick sort --> Ahora mi pivote es el [2]
   der = [vacio]
   equals = [2,2]  
   izq = [vacio]

9.Resolucion [2,2]--> vuelvo hacia atras y concateno los resultados de cada quick sort=[1,2,2,3,4,6,9]
10.Concateno los arreglos de izq a der .Ej:
   der= [2,2]
   equals = [1]
   izq = [vacio]     return ([].concat([1])).concat([2,2])

*/

