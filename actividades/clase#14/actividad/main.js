import { crearPedido, calcularTotalDia, pedidos } from "./pedidos.js";
import { mensajePedidoCreado, mensajeTotalDia } from "./ui.js";
import resumenDia from "./ui.js";

const preferenciasCliente = {
    ana: { direccion: { edificio: "Aulas 3" } },
    luis: {},
};

const p1 = crearPedido({ cliente: "Ana", producto: "Gallo", precio: 2500 }, "Sin cebolla");
console.log(mensajePedidoCreado(p1));
const p2 = crearPedido({ cliente: "Luis", producto: "Casado", precio: 2500 }, "queso", "aguacate");
console.log(mensajePedidoCreado(p2));

const edificioLuis = preferenciasCliente.luis?.direccion?.edificio;
console.log(`Edificio de Luis: ${edificioLuis ?? "sin registrar"}`);

console.log(mensajeTotalDia(calcularTotalDia(pedidos)));
console.log(resumenDia(...pedidos));