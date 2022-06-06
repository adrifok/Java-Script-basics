                        CLOSURES
                        
Un Closure se produce cuando una funcion utiliza variables que no le pertenecen, que estan fuera de su contexto de ejecucion.         
                        
                        

function pedirPizza(UID, pizza){
        let cantidadPizzas = 0
        const pedido = `$PEDIDO_{UID}`
        const domicilio =`$domicilio`
        return function(pizza){
                cantidadPizzas ++
                return `${pedido}_${pizza}_${cantidadPizzas}_${domicilio}`;
        };
}
        const pedidoUID = pedirPizza(598662);
        console.log(pedidoUID('marinara', 'JBJusto 1045'));
        console.log(pedidoUID('anchoa'));
        console.log(pedidoUID('bacon'));
        console.log(pedidoUID('marinara'));
----------------------------------------------------------------------------------------------------------------

function despedirse(nombre){
    var edad = 20;

    return function(){
        var ciudad = 'Ciudad de Panama';
        console.log('adios ' + nombre + ' ' + edad + ' ' + ciudad)
    }
}

var despedida = despedirse('Camilo')(30)('Buenos Aires');
despedida();
console.log(despedida);

---------------------------------------------------------------------------------------------------------------
  





















































