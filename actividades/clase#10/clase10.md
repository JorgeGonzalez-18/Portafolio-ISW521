ACTIVIDAD 1

BLOQUE A
console.log(x); -> undefined
var x = 10;
console.log(x); = 10;

BLOQUE B
console.log(x); -> undefined
let y  = 20;
console.log(y); = 20;

BLOQUE C
const obj = {a: 1};
obj .a = 99;
obj = {};



ACTIVIDAD 2

1="3"
resultado= 13
tipo= string

"5"-2
resultado= 3
tipo= number


true+true
resultado= 2
tipo=number

null+undefined
resultado=NaN
tipo= number

""==false
resultado= true
tipo=boolean

type NaN
resultado= number
tipo= string

boolean("")
resultado=false
tipo=boolean

[]==false;
resultado=true
tipo= boolean

ACTIVIDAD 3

null||"default"||""otro = default
false && "nunca" && "tampoco" = false 
""||0||null||"ultimo" = ultimo
"usuario" && null && "perfil" = null 
5==="5" = false
null === undefined = true 


ACTIVIDAD 4
const rol = "admin";
let permiso;
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