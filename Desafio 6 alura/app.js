//Funcion que va a calcular el IMC de una persona a partir de su peso en kg y su altura en (metros)*2.
//planificamos funcion para utilizar con los datos ingresados los cuales van a entrar por el parametro de peso y altura
    var peso = parseInt((prompt("Ingrese su peso en kg")));
    var altura = parseFloat((prompt("Ingrese su altura en metros")));
    
function calculaIMC(kg,mts) {
    //operacion para calcular IMC
    var imc = kg / ( mts * mts );
    return imc;
}
console.log("Su valor IMC es: "+calculaIMC(peso,altura));

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------