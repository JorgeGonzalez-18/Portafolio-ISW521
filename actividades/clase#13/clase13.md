tipos estructura datos java
1 estaticos= matriz (matrix), arrays (arreglos)
2 dinamicos= listas, colas, pilas, etc

ACTIVIDAD#1
let a = { puntos: 10 };
let b = a;
b.puntos = 99;

console.log(a.puntos);

let c = { ...a };
console.log(a.puntos, b.puntos, c.puntos);
OUTPUT= 99 1 99


ACTIVAD #2
OUTPUT= HOLA , PURA VIDA, HOLA


ACTIVIDAD #3

function Curso(nombre){
    this.nombre = nombre;
}
faltaba la palabra new 
