// function sumasTodo(...numeros) {
//     return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// }
// console.log(sumasTodo(10, 20, 30, 40, 50));
// console.log(sumasTodo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// const original = { nombre: "equipo A", puntos: 10 };
// const actualizado = { ...original, puntos: 15 };
// console.log("Original", original);
// console.log("Actualizado", actualizado);


// import { sumar, restar } from "./matematicas.js";
// console.log("Suma", sumar(10, 20));
// console.log("Resta", restar(10, 20));

// let a = { puntos: 10 };
// let b = a;
// b.puntos = 99;

// console.log(a.puntos);

// let c = { ...a };
// console.log(a.puntos, b.puntos, c.puntos);

import { Perro } from "./perro.js";
const saguate = new Perro("Perro", "Saguaton", 5, "Criollo", "pequeno");
console.log(saguate.ladrar());