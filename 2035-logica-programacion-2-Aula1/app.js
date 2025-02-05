let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('corroborar').value);
    console.log(intentos);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector('#corroborar').value="";
    
}
function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Game Number secret(oficial code Shekax)');
    asignarTextoElemento('p', 'Ingrese un numero del 1-10');
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}
function reiniciarJuego() {
    //Limpiar la Caja
    limpiarCaja();
    //Indicar mensaje de inicio
    //Generar numero aleatorio nuevo
    //inicializar intentos
    condicionesIniciales();

    //Remover el boton de reiniciar juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
    
}
condicionesIniciales();