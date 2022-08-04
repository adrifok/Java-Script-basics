                        //RECORRER ARRAYS DE OBJETOS//

//Recorrer objetos con metodo 'for in', el que regresa las propiedades del objeto en forma de string:
/*let persona = {
  nombre: 'adriana',
  apellido: 'ferrari',
  edad: 57,
};
for(let propiedad in persona){
  //console.log (typeof propiedad);//'string' 'string' 'string'
  //console.log(propiedad);//'nombre' 'apellido' 'edad'
  //console.log(persona);//{ nombre: 'adriana',apellido: 'ferrari',edad: 57}
  //console.table(persona);
  //console.log(propiedad  + ' : ' + persona[propiedad]); //'nombre : adriana' 'apellido : ferrari' 'edad : 57'
}
 */

//Recorrer objetos con metodo Object.entries(objeto) el que devuelve un array por cada [propiedad-valor] que hay dentro del objeto.

/*let persona = {
  nombre: 'adriana',
  apellido: 'ferrari',
  edad: 57,
};
let entradas = Object.entries(persona);
//console.log(entradas);//[[ 'nombre', 'adriana' ],[ 'apellido', 'ferrari' ],[ 'edad' 57 ]]
//puedo recorrer el array de objetos con Map que devuelve un nuevo array:
let recorrer = entradas.map(function(elemento){
//console.log(elemento[0] + ' : ' + elemento[1]);//'nombre : adriana''apellido : ferrari''edad : 57
});*/

//Recorrer objetos con metodos Object.keys que regresa un array con las propiedades que integran el objeto:
/*let persona = {
  nombre: 'adriana',
  apellido: 'ferrari',
  edad: 57,
};
let propiedades = Object.keys(persona);
console.log(propiedades);//[ 'nombre', 'apellido', 'edad' ]*/

//Recorrer objetos con metodos Object.values que regresa un array con los valores(keys) que integran el objeto:
/*let persona = {
    nombre: 'adriana',
    apellido: 'ferrari',
    edad: 57,
  };
  let propiedades = Object.values(persona);
  console.log(propiedades);//[ 'adriana', 'ferrari', 57 ]
  */