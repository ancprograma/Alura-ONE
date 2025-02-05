alert("Bienvenido y Bienvenida a nuestro sitio web!");
//estas son variables definidas mediante el let
let nombre="Lua";
let edad= 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

let mensajeDeError = "Error completa todos los campos.";
alert(mensajeDeError);
//Captar datos
nombre = prompt("Indique su nombre");
edad = prompt("Indique su edad");
//validacion de la edad 
/*
esto se puede hacer tambien 
*/
if(edad >= 18) {
    alert("Puede obtener su licencia de conducir");
} else {
    alert("Su edad es menor no se puede sacar el registro de conducir");
};
/*
EJEMPLO DE COMO UTILIZAR UN Console.log Para reclicar informacion.

alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
*/