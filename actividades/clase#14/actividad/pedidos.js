export const pedidos = [];

export class Pedidos {
    constructor({ cliente, producto, precio, notas }, ...extras) {
        this.cliente = cliente;
        this.producto = producto;
        this.precio = precio;
        this.notas = notas;
        this.extras = extras;
    }
    aplicarDescuento(porcentaje) {
        return { ...this, precio: this.precio - (this.precio * porcentaje / 100) };
    }
}
export function crearPedido({ cliente, producto, precio, notas }, ...extras) {
    const precioFinal = precio ?? 1000; // ?? en vez de || porque 0 es un valor valido y con || daria falsy por ser 0
    const pedido = new Pedidos({ cliente, producto, precio: precioFinal, notas }, ...extras);
    pedidos.push(pedido);
    return pedido;
}
export function calcularTotalDia(listaPedidos) {
    return listaPedidos.reduce((total, pedido) => total + pedido.precio, 0);
}
export function aplicarDescuento(pedido, porcentaje) {
    return pedido.aplicarDescuento(porcentaje)
}
