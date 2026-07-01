const ventasFeria = [
    {
        stand: "Stand 3", producto: "Empanadas", categoria: "comida",
        monto: 15000, etiquetas: ["salado", "artesanal"]
    },
    {
        stand: "Stand 3", producto: "Refresco natural", categoria: "bebida",
        monto: 6000, etiquetas: ["natural"]
    },
    {
        stand: "Stand 7", producto: "Llavero tallado", categoria: "artesania",
        monto: 3500, etiquetas: ["madera", "artesanal"]
    },
    {
        stand: "Stand 7", producto: "Pulsera tejida", categoria: "artesania",
        monto: 2500, etiquetas: ["tejido"]
    },
    {
        stand: "Stand 12", producto: "Jabon artesanal", categoria: "cuidado",
        monto: 4000, etiquetas: ["natural", "artesanal"]
    },
    {
        stand: "Stand 5", producto: "Cafe de altura", categoria: "bebida",
        monto: 8000, etiquetas: ["organico"]
    },
    {
        stand: "Stand 5", producto: "Postre de cafe", categoria: "comida",
        monto: 3000, etiquetas: ["dulce"]
    },
];


console.log("--- Parte A ---");

console.log(typeof ventasFeria);
ventasFeria[15] = { stand: "Stand 20", producto: "Sorpresa" };
console.log(ventasFeria.length);
for (let i = 7; i <= 14; i++) {
    console.log(i, ventasFeria[i]);
}

ventasFeria.length = 7;
console.log(ventasFeria.length);

console.log("--- Parte B ---");

let ventasAltasImperativo = [];
for (let i = 0; i < ventasFeria.length; i++) {
    if (ventasFeria[i].monto > 5000) {
        ventasAltasImperativo.push(ventasFeria[i]);
    }
}

let nombresProductosImperativo = [];
for (let i = 0; i < ventasFeria.length; i++) {
    nombresProductosImperativo.push(ventasFeria[i].producto.toUpperCase());
}


const ventasAltas = ventasFeria.filter(venta => venta.monto > 5000);
console.log(ventasAltas);

const nombresProductos = ventasFeria.map(venta => venta.producto.toUpperCase());
console.log(nombresProductos);

console.log(JSON.stringify(ventasAltas) === JSON.stringify(ventasAltasImperativo));
console.log(JSON.stringify(nombresProductos) === JSON.stringify(nombresProductosImperativo));


console.log("--- Parte C ---");

function ordenarPorMontoMutando(lista) {
    lista.sort((a, b) => b.monto - a.monto);
    return lista;
}

const ordenadas = ordenarPorMontoMutando(ventasFeria);
console.log(ventasFeria);
function ordenarPorMontoSinMutar(lista) {
    return [...lista].sort((a, b) => b.monto - a.monto);
}

const ventasFeriaOriginal = [
    { stand: "Stand 3", producto: "Empanadas", categoria: "comida", monto: 15000, etiquetas: ["salado", "artesanal"] },
    { stand: "Stand 3", producto: "Refresco natural", categoria: "bebida", monto: 6000, etiquetas: ["natural"] },
    { stand: "Stand 7", producto: "Llavero tallado", categoria: "artesania", monto: 3500, etiquetas: ["madera", "artesanal"] },
    { stand: "Stand 7", producto: "Pulsera tejida", categoria: "artesania", monto: 2500, etiquetas: ["tejido"] },
    { stand: "Stand 12", producto: "Jabon artesanal", categoria: "cuidado", monto: 4000, etiquetas: ["natural", "artesanal"] },
    { stand: "Stand 5", producto: "Cafe de altura", categoria: "bebida", monto: 8000, etiquetas: ["organico"] },
    { stand: "Stand 5", producto: "Postre de cafe", categoria: "comida", monto: 3000, etiquetas: ["dulce"] },
];

const ordenadasSinMutar = ordenarPorMontoSinMutar(ventasFeriaOriginal);
console.log(ordenadasSinMutar.map(v => v.monto));
console.log(ventasFeriaOriginal.map(v => v.monto));
console.log("--- Parte D ---");

const reporteProductos = ventasFeriaOriginal.map(
    venta => `${venta.producto.toUpperCase()} (${venta.stand}) — ${venta.monto} colones`
);
console.log(reporteProductos);

console.log(reporteProductos.length === ventasFeriaOriginal.length); // true

console.log("--- Parte E ---");

const artesanias = ventasFeriaOriginal.filter(venta => venta.categoria === "artesania");
console.log(artesanias);
const nombresArtesania = ventasFeriaOriginal.filter(venta => venta.categoria === "artesania").map(venta => venta.producto);
console.log(nombresArtesania);

console.log("--- Parte F ---");


const ventaMontoAlto = ventasFeriaOriginal.find(venta => venta.monto > 7000);
console.log(ventaMontoAlto);

const indiceVentaMontoAlto = ventasFeriaOriginal.findIndex(venta => venta.monto > 7000);
console.log(indiceVentaMontoAlto);

console.log("--- Parte G ---");

const totalPorCategoria = ventasFeriaOriginal.reduce((acumulador, venta) => {
    acumulador[venta.categoria] = (acumulador[venta.categoria] || 0) + venta.monto;
    return acumulador;
}, {});
console.log(totalPorCategoria);

const montoTotalGeneral = ventasFeriaOriginal.reduce((total, venta) => total + venta.monto, 0);
console.log(montoTotalGeneral);


console.log("--- Parte H ---");

const montos = ventasFeriaOriginal.map(v => v.monto);

console.log(montos.sort());
const ventasOrdenadasPorMonto = [...ventasFeriaOriginal].sort((a, b) => b.monto - a.monto);
console.log(ventasOrdenadasPorMonto.map(v => v.monto));
console.log(ventasFeriaOriginal.map(v => v.monto));


console.log("--- Parte I ---");

const todasLasEtiquetas = ventasFeriaOriginal.flatMap(venta => venta.etiquetas);
console.log(todasLasEtiquetas);

const etiquetasUnicas = new Set(todasLasEtiquetas);
console.log(etiquetasUnicas.size);


console.log("--- Opcional ---");

const miniReporteArtesania = ventasFeriaOriginal
    .filter(venta => venta.categoria === "artesania")
    .map(venta => `${venta.producto} — ${venta.monto} colones`)
    .sort();
console.log(miniReporteArtesania);
