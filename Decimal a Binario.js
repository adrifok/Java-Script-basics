/*Binario a Decimal

Tomo el número( de izq. a der) y lo multiplico por 2 elevado a la posición.
Primero elevo el número a la potencia y después multiplico por el binario.

    1 1 0 =   1 x 2 ^ 2   +  1 x 2 ^ 1  +  0 x 2 ^ 0
pos 2 1 0       1 x 4     +    1 x 2    +   0 x 1
                  4       +      2      +     0
                  6 


Decimal a Binario 
          En cuanto al pasaje de decimal a binario, debemos dividir por dos y quedarnos con el resto, dicho 
resto va a ser quien nos marque el binario involucrado.
Por ejemplo:
Realizamos la operación inversa, convertimos 21 en binario.

21/2 = 10 (resto 1)
10/2 = 5 (resto 0)
5/2 = 2 (resto 1)
2/2 = 1 (resto 0)
1/2 = 0 (resto 1)

Ahora leemos de abajo hacia arriba los restos, al concatenarlos, obtendremos nuestra solución en 
binario 10101.
Otro ejemplo:
           E  R

7 = 7 / 2  3  1        3   3   --> 1 es el resto/residuo
    3 / 2  1  1        1   1   --> 1
    1 ------> 1


binario --> 1 1 1 
Formo el número binario con los residuos de abajo hacia arriba

            E  R
8 = 8 / 2   4  0
    4 / 2   2  0
    2 / 2   1  0
    1 -------> 1

    */
