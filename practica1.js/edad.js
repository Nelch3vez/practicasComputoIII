//Indicaciones: Después de dar lectura al contenido de la semana y participar activamente en el desarrollo de la clase, resuelva cada uno de los siguientes ejercicios

//1. Escriba un programa el cual reciba la edad argumento y determine si es mayor de edad.


console.log("Escriba un programa el cual reciba la edad argumento y determine si es mayor de edad.");


const edad = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
edad.question("¿Cuál es su edad?: ", edad => {

    if(edad >= 18){
        console.log("Usted es mayor de edad y posee DUI.");
    }else{
        console.log("Usted es menor de edad y posee carnet de minoridad.");
    }
});
