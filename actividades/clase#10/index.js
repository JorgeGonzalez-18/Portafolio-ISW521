// const v8 = require("v8");

// const variableJulian ={
//     nombre: "Javascript",
//     version: 2026,
// };

// const tamano = v8.serialize(variableJulian).length;
// // ${tamano} = interpolaciom de cadenas, se utiliza para insertar el valor de la variable tamano dentro de la cadena de texto que se va a imprimir en la consola.

// console.log(`El tamaño de la variable es: ${tamano} bytes`);

// if(true){
//     var edad = 30;
// }
// console.log(`La edad de Julian es: ${edad} años`);
// if(true){
//     let puntos = 100;
//     console.log(`Los puntos de Julian son: ${puntos}`);
// }
// if(true){
//     const PI = 3.1416;
//     console.log(`El valor de PI es: ${PI}`);
// }
// typeof 44; // number
// console.log(`El tipo de dato de 44 es: ${typeof 44}`);
// console.log(`El tipo de dato de 44 es: ${typeof undefined}`);

// typeof "Hola"; // string
// typeof true; // boolean
// typeof undefined; // undefined
// typeof null; // object (esto es un error en JavaScript, pero se mantiene por compatibilidad)
// typeof { nombre: "Julian" }; // object
// console.log(`El tipo de dato de { nombre: "Julian" } es: ${typeof { nombre: "Julian" }}`);
// typeof [1, 2, 3]; // object (los arrays son objetos en JavaScript)
// typeof function() {}; // function



var edad=3;
var rangoEdad;
if(edad>1&& edad<13){
    rangoEdad="Eres un niño";
}else if(edad>=13 && edad<18){
    rangoEdad="Eres un adolescente";
}else if(edad>=18 && edad<65)  {
    rangoEdad="Eres un adulto";
}else if(edad>=65){
    rangoEdad="Eres un adulto mayor";
}
console.log(rangoEdad);
rangoEdad = edad >= 1 && edad < 13 ? "Eres un niño" :
    edad >= 13 && edad < 18 ? "Eres un adolescente" :
    edad >= 18 && edad < 65 ? "Eres un adulto" :
    edad >= 65 ? "Eres un adulto mayor" :
    "ROCASO";
console.log(rangoEdad);
//     console.log("la edad es"+(edad>=18?"Mayor de edad":"Menor de edad"));

console.log("**************************************************");
console.log("**************************************************");
console.log("**************************************************");

const mes = 1;
var mesActual;
switch(mes){
    case 1:
        mesActual = "Enero";
        break;
    case 2:
       mesActual= "Febrero"
        break;
    case 3:
        mesActual = " Marzo";
        break;                 
    case 4:
        mesActual = "Abril";
        break;
    case 5:
        mesActual = "May0";
        break;
    case 6:
        mesActual = " Junio";
        break;
    case 7:
        mesActual = "Julio";
        break;
    case 8:
        mesActual = "Agosto";
        break;
    case 9:
        mesActual = "Septiembre";
        break;
    case 10:
        mesActual = "Octubre";
        break;
    case 11:
        mesActual = "Noviembre";
        break;
    case 12:
        mesActual = "Diciembre";
        break;
    default:
        console.log("No fue a la escuela");
}
console.log(mesActual);
console.log("**************************************************");
console.log("**************************************************");

const rol = "admin";
var permiso;
if(rol === "admin"){
    permiso= "total";
}else if(rol === "editor"){
    permiso = "lectura-escritura";
}else if (rol === " viewer"){
    permiso = " solo-lectura";
}else {
    permiso = " sin permisos";
}
console.log(permiso);
permiso = rol === "admin" ? "total":
rol === "editor" ? "lectura-escritura":
rol === "viewer" ? "solo-lectura":
"sin permisos";
console.log(permiso);
switch(rol){
    case "admin":
        permiso = "total";
        break;
    case "editor":
        permiso = "lectura-escritura";
        break;
    case "viewer":
        permiso = "solo-lectura";
        break;
    default:
        permiso = "sin permisos";
}
console.log(permiso);