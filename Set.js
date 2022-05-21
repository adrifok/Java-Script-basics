
//                             Sets y sus metodos
//El Set filtra los elementos repetidos de un array.

var arreglo =[1,2,3,4,4,5,5,1,2]
var set1 = new Set(arreglo)    //la nueva clase Set recibe un arreglo
console.log(arreglo);
console.log(set1)    //Set(5) { 1, 2, 3, 4, 5 } = 5 elementos sin valores repetidos
var filteredArray = Array.from(set1)  //vuelvo a convertirlo en un array con el metodo array.from
console.log(filteredArray); //Set(5) { 1, 2, 3, 4, 5 }
                            //       [ 1, 2, 3, 4, 5 ]
set1.add(10)                //agrega un valor no repetido al array
console.log(set1);          //Set(6) { 1, 2, 3, 4, 5, 10 }

set1.delete(10)             //elimina valores existentes
console.log(set1);          //Set(5) { 1, 2, 3, 4, 5 }

set1.add({a :1})            //puedo agregar un objeto
console.log(set1)           //Set(6) { 1, 2, 3, 4, 5, { a: 1 } }
set1.add({a :1})            //vuelvo a agregar el objeto
console.log(set1)           //Set(7) { 1, 2, 3, 4, 5, { a: 1 }, { a: 1 } }
 
console.log(set1.has(15)) //false. El metodo .has retorna si el valor existe o no con un boolean

var setIter = set1.entries()  //recorre el set con .entries y devuelve una funcion iteradora
for(var entry of setIter){
    console.log(entry)  //[ 1, 1 ],[ 2, 2 ],[ 3, 3 ],[ 4, 4 ],[ 5, 5 ],[ { a: 1 }, { a: 1 } ],[ { a: 1 }, { a: 1 } ]
}


