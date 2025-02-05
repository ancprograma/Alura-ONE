let horaDesafio = document.querySelector('h1');
horaDesafio.innerHTML = "Hora del Desafio";

function consola() {
    console.log('El boton fue clickeado');
}

function alerta() {
    alert("Yo amo JS");
}

function promptis() {
    let ciudad  = prompt("En que ciudad de br estas?");

    alert("Yo estuve en "+ciudad + " y me acordé de ti");
}

function suma(){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let resultado = num1 + num2;
    alert("El resultado de la suma es: " + resultado);
}

