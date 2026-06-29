import { Animal } from "./animal.js";

export class Perro extends Animal {
    constructor(especie, nombre, edad, raza, tamano) {
        super(especie, nombre, edad);
        this.raza = raza;
        this.tamano = tamano;
    }
    ladrar() {
        console.log(`Guau, guau, soy ${this.nombre} mi raza es ${this.raza} y soy ${this.tamano}`);
    }
}