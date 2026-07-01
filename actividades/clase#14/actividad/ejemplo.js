var nombreSoda = "La Sodita UTN";
var pedidos = [];

function crearPedido(cliente, producto, precio, notas) {
    var pedido = {
        cliente: cliente,
        producto: producto,
        precio: precio,
        notas: notas
    };
    pedidos.push(pedido);
    console.log("Pedido creado para " + cliente + ": " + producto + " - " + precio);
    return pedido;
}

function calcularTotalDia() {
    var total = 0;
    for (var i = 0; i < pedidos.length; i++) {
        total = total + pedidos[i].precio;
    }
    return total;
}

function aplicarDescuento(pedido, porcentaje) {
    pedido.precio = pedido.precio - (pedido.precio * porcentaje / 100);
    return pedido;
}

crearPedido("Ana", "Casado", 2500, "Sin cebolla");
crearPedido("Luis", "Cafe con pan", 1200, undefined);
console.log("Total del dia: " + calcularTotalDia());
