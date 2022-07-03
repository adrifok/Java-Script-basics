// HIGH ORDER FUNCTIONS -> necesitan una funcion como argumento para hacer su trabajo
// 
// ForEach, Map, Sort, Filter, Reduce 

let employees = [
    {name : 'John', salary: 90000, hireDate : 'July 1, 2010'},
    {name : 'David', salary: 75000, hireDate : 'August 15, 2009'},
    {name : 'Ana', salary: 80000, hireDate : 'December 12, 2011'},
];

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}

// forEach method: necesita una funcion para funcionar. No retorna nada. No muta el array original. 
// Ejecuta la funcnion cb indicada por cada elemento del array.

employees.forEach((elemento, index) => console.log(employees.name, index));


// filter method (crea un nuevo array, retorna uno nuevo y no muta el array original. Filtrado de datos)

const highTier = employees.filter (elemento =>elemento.salary > 75000);
console.log(highTier);


// Map method: crea un un nuevo array, con la misma longitud que el original, con alguna transformacion o algo nuevo. 
// Llama a una funcion para cada elemento del array original.
// No ejecuta arrays vacios.

const upperCase = employees.map(elemento =>elemento.name.toLocaleUpperCase())
console.log(upperCase);

const employeesTier = employees.map(function(ele){
    return {
        name : ele.name,
        tier : ele.salary > 75000 ? 'high' : 'mid' 
}
});
console.log(employeesTier)
/
// Sort method: no necesita funcion para operar. Crea un array en orden ascendente ordenando los elementos 
//del array como un string. Modifica el array original y lo retorna ordenado.

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(function(num1, num2){
   return num1 - num2;
    if(num1 < num2){
        return 1;
    }else if(num1 > num2){
        return -1
    }else{
        return 0
    }

});
const sortedEmployees = [employees].sort((a, b) =>a.salary - b.salary);
console.log(employees, sortedEmployees);

//Reduce method;: reduce los valores del array a un unico valor.

const total = [1, 2, 3, 4, 5, 6, 7].reduce(function(total, current){
    console.log(total, current);
    return total + current;
});
console.log(total);

const totalSalaries = employees.reduce((total, current) => total + current.salary,0);
console.log(totalSalaries)

//Chaining method:  combinacion de funciones de orden mayor. Por ej: sacar el total de los empleados de mayor salario (highTier)
const totalHighTier = employees.map(elemento => elemento.salary)
.filter(salary => salary >75000)
.reduce((total, current) => total + current)
console.log(totalHighTier);

//font: https://www.youtube.com/watch?v=4hrQtbaHVCQ by Wmedia por Juan Andrés Núñez

//For in method: 
//La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas 
//(ignorando los codificados por Símbolos, incluidas las propiedades enumerables heredadas).

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
/------------------------------------------------/

