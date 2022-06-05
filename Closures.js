                        CLOSURES

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




















































