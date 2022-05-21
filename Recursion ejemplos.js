
/*Funcion factorial con recursion

function nFactorial(n) {
    // devolvé el factorial de n (n!)
    // ej:
    // el factorial de 3 es 6 (3 * 2 * 1)
  
    if ( n > -1 && n < 2) return 1;    //Caso base:el factorial de 0 y 1 es =1. el caso de corte es entre 0 y 1. //tiene q devolver 1
    else if (n < 0) return 0;   // Error: no existe el factorial de numeros negativos
        return n * nFactorial(n -1);  //devuelve el producto de n por el factorial de n - 1.
  }

  //Recursion (ejemplo)
//Recorrer hasta 10 con for

for (var i = 0; i<=10; i++){
    console.log(i)   //1,2,3,4,5,6,7,8,9,10
        }

//Mismo ejemplo. Recorrer hasta 10 con Recursion

function recToTen(num){
    if (num > 10) return 'terminado';
    console.log(num)   //1,2,3,4,5,6,7,8,9,10
    ++num;
    return recToTen (num)
}
console.log (recToTen(1));

//Verificar si un nro es par con recursion
function esPar(n){
    if (n === 0) return 'Es par';                //caso base
    if    (n < 0) return 'Es impar';            //pasa un nro y lo resta hasta llegar a 0(es par) si no llega a 0 es impar
    return esPar(n - 2);                        //recursion
}
console.log(esPar(4));
  */