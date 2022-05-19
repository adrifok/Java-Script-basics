/*
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
