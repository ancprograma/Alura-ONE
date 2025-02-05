/* 
Crea una funcion que muestre en pantalla la tabla de multiplicar de un numero dado como parametro
*/

function tabla(numero){
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + numero * i);
    }
}