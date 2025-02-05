//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador= 1;
while (contador <= 10){
    console.log(contador);
    contador++;
}

//2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contador2= 10;
while (contador2 >= 0){
    console.log(contador2);
    contador2--;
}

//3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let dato= prompt("Ingrese su numero");
let contador3 = dato;
while ( contador3 >= 0){
    console.log(contador3);
    contador3--;
}

//4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let dato2= prompt("Ingrese su numero para hacer suma progresiva");
let contador4= 0;
while (contador4 <= dato2){
    console.log(contador4);
    contador4++;
}
