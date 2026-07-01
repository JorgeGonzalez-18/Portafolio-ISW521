
export function mensajePedidoCreado(pedido) {
    return `Pedido creado de: ${pedido.cliente} - ${pedido.producto}-${pedido.precio}`;
}
export function mensajeTotalDia(total) {
    return `Total del dia: ${total}`;
}
export default function resumenDia(...pedidos) {
    const detalleTotal = pedidos.map((pedido) => ` -${pedido.cliente}: ${pedido.producto} (${pedido.precio})`).join("\n");
    const total = pedidos.reduce((sum, pedido) => sum + pedido.precio, 0);

    return `Resumen del dia
Pedidos: ${pedidos.length} 
${detalleTotal}
Total: ${total}`;
}