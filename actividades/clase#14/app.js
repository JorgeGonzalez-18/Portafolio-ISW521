// const precios = [100, 250, 80, 400];

// const caros = precios.filter(precio => precio > 150);

// console.log(caros);

// const estudiantes = [
//     { nombre: "ana", carnet: "12345678" },
//     { nombre: "luis", carnet: "6765432" }
// ]
// const datosEstudiantes = estudiantes.map(e => `${e.nombre}(${e.carnet})`.toUpperCase());

// console.log(datosEstudiantes);
// const estudiantes = [
//     { nombre: "ana", promedio: 85 },
//     { nombre: "luis", promedio: 67 },
//     { nombre: "sara", promedio: 91 }
// ];

// const aprobados = estudiantes.filter(e => e.promedio >= 80);

// console.log(aprobados);

// const gastos = [
//     { cat: "comida", monto: 5000 },
//     { cat: "transporte", monto: 2000 },
//     { cat: "comida", monto: 3000 }
// ];

// const porCategoria = gastos.reduce((acc, g) => {
//     acc[g.cat] = (acc[g.cat] || 0) + g.monto;
//     return acc;
// }, {})
// gastos.reduce((acc, g) => acc + g.monto, 0);

// const gastoAcomulado = gastos.reduce((sum, gst) => {
//     sum += gst.monto;
//     return sum;
// }, 0);

// console.log(porCategoria);
// console.log(gastoAcomulado);
