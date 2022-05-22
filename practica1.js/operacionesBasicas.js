//2. Escriba un programa que le solicite dos números y permita realizar las operaciones básicas, el usuario debe seleccionar la operación a realizar.

console.log("Esriba un programa que le solicite dos números y permita realizar las operaciones básicas, el usuario debe seleccionar la operación a realizar.");

exports.operacionBasica=(operacion)=>{

    const num= require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    num.question("¿Cuál es su primer número?:", num1  => {
        num.question("¿Cuál es su segundo némero?: ", num2 => {
            if(operacion=1){
                console.log(num1+num2)
                
            }else if(operacion=2){
                console.log(num1-num2)

            }else if(operacion=3){
                console.log(num1*num2)
            }else if(operacion=4){
                console.log(num1/num2)
            }
        });
    });
    
}