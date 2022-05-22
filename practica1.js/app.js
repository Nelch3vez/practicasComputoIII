const {comidasTipicas} = require('./comidasTipicas.js');

const {operacionBasica}=require('./operacionesBasicas.js')

const operacion= require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

operacion.question("¿Que operación desea realizar elija del 1 al 4?: \n 1. Suma \n 2. Resta \n 3. Multiplicación \n 4. División \n", operacion => {
    operacionBasica(operacion)
   
});