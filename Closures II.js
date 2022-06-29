//CLOSURES
//Para crear una clausura (o funciones anidadas) en JScript precisamos 3 condiciones: 
//-una funcion que se encuentre dentro de otra funcion (funcion anidada) (a)
//-una variable que se encuentre en el scope superior y que la funcion la utilice de alguna manera (b)
//-invocar a la funcion interna, no desde el scope donde esta escrita, sino desde otro scope (c)

function crearContador(){
        let contador = 0;                                //(b)
        setTimeout(() => {  //la funcion que esta dentro del timer tambien es un closure ya qye se invoca desde otro scope
            contador = 100;
        }, 5000);
    return {
        incrementar : function(){                         //(a)
         contador = contador + 1;                          //(b)
         return contador;
    incrementar()                                          //(c)
  },
       decrementar: function(){
        contador = contador -1;
        return contador;
       },
       obtenerValor: function(){
        return contador;
       }
};

    const contador1 = crearContador();   //guardamos la funcion en una variable para poder invocar cuando se precise. 
    //Sigue sin estar en el mismo scope pero esta vinculada a la variable local.
    const contador2 = crearContador();  //podemos agregar variables a esa funcion
    contador1.incrementar();
    contador2.incrementar();
    obtenerValor();
}
    const contador1 = crearContador(10);    //se pueden crear mas funciones a partir de invocar la primer funcion crearContador
    const contador2 = crearContador(500);
    

//-----------------------------------------------------------------------------------------------------//
    const edad = 30;
    const nombre = 'adri';
    const saludar = function (){
        console.log('hola')
    };

    //-------------------------------------------------------------------------------------------------//

        function crearImpresoradeMensajes(tipo, estilos){
            return function mensaje(str){
    function mensaje(str){
        console.log(`%c ${tipo}: ${str} `, estilos);   
    }
}
        const error = crearImpresoradeMensajes('Error','background: red; color:white');
        const warning = crearImpresoradeMensajes('Warning','background: orange; color : white');
        const exito = crearImpresoradeMensajes('Exito','background: grey; color: black');
}   

    //fuente https://www.youtube.com/watch?v=JXG_gQ0OF74&t=1127s (La Cocina del Codigo)
    