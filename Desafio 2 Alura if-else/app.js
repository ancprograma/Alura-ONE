//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaSemana = prompt("Indique que dia de la semana estamos");

if (diaSemana == 'Sabado' || diaSemana == "domingo"){
    alert("Buen fin de semana");
} else {
    alert("Buena Semana");
}

//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numeroUsuario = prompt("ingrese Un digito");

console.log(numeroUsuario)
if ( numeroUsuario > 0){
    alert(`${numeroUsuario} Es positivo`);

} else {
    alert(numeroUsuario + "Es negativo");
}

/*
3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
En caso contrario, muestra "Intentalo nuevamente para ganar.". 
*/

let puntuacion = prompt("Ingrese a continuacion la puntuacion lograda en el juego");
console.log(puntuacion);
if ( puntuacion >= 100) {
    alert("Felicidades usted a ganado");
} else {
    alert("Ups, usted a perdido");
}

//4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let saldoCuenta = 500; 
alert(`Tu saldo es de ${saldoCuenta}.`);

//5. Pide al usuario que ingrese su nombre mediante un prompt . Luego , Muestra una alerta de bienvenida con ese nombre

let nombreUsuario = prompt("Ingrese su nombre");
alert(`Bienvenido ${nombreUsuario}`);

