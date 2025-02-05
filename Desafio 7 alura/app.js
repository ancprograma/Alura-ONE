/*
# Crea una funcion que calcule el valor del factorial de un numero pasado como parametro.
*/
let numero = parseInt(prompt("ingrese su numero"));
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
3
console.log(factorial(numero));