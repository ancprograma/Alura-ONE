/*
function helloWorld() {
    console.log("Hello, World!");
    return;
}
helloWorld();

function nombreUsuario(nombre) {
    nombre = prompt("ingrese su nombre...");
    console.log(`Hola ${nombre}`);
    return;
}
nombreUsuario();

function doble(numero , doble) {
    numero=prompt("ingrese su numero.");
    doble = numero * 2;
    console.log("El doble de: "+ numero + " es "+ doble);
    return;
}
doble();
*/

/*
function promedio(a,b,c,result) {
    a=parseInt(prompt("ingrese el primer numero."));
    b=parseInt(prompt("ingrese el segundo numero."));
    c=parseInt(prompt("ingrese el tercer numero."));
    result = (a + b + c) / 3;
    console.log("El promedio de: "+ a + ", "+ b + ", y "+ c + " es "+ result);
}
promedio();
*/
/*
function mayor(numA,numB){
    numA=parseInt(prompt("ingrese su primer numero"));
    numB=parseInt(prompt("ingrese su segundo numero"));
    if (numA > numB) {
        console.log(numA + " es mayor que " + numB);
    } else {
        console.log(numB + " es mayor que " + numA);
    }
}
mayor();
*/
function mismoNum(numC){
    numC=parseInt(prompt("ingrese su numero"));
    let numD = numC*numC;
    console.log("El resultado de multiplicar " + numC + " por si mismo es " + numD );
}
mismoNum();