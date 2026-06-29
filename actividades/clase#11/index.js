// const readline = require("readline/promises"); //promises para usar async/await, mas reciente de readline

// const { stdin: input, stdout: output } = require("process");

// const rl = readline.createInterface({ input, output });

// async function iniciar() {
//     const nombre = await rl.question("digite su nombre");
//     const valLetras = /^([a-zA-Z]\s?)+$/
//     if (valLetras.test(nombre)) {
//         console.log(`El nombre escrito fue: ${nombre}`);
//     } else {
//         console.log("Debe digitar solo letras")
//     }
//     rl.close();
// }
// iniciar();


// fizzbuzz 

// while(fb<=30){
//     if(fb%3==1){
//         console.log("fizz");
//     }else if(fb%5==1){
//         console.log("Buzz");
//     }else{
//         console.log("fizzBuzz");
//     }
//     fb++;
// }
// var fb = 30;
for (let i = 0; i <= 30; i++) {
    if (i % 3 == 1 && i % 5 == 0) {
        console.log("fizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    }
}

