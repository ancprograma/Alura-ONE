/* Crea una funcion que convierta un valor en dolares , pasado como parametro y devuelva el valor equivalente en reales  teniendo en cuenta que la cotizacion es
del 1 USD = R$4,80. */
let dolar = parseFloat(prompt('Ingrese la cantidad de dolares a convertir.'));
function convertir(valorDolares) {
    let cotizacion = 4.80;
    return valorDolares * cotizacion;
}

console.log(`El valor equivalente en reales es: ${convertir(dolar)}`);