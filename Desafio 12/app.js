 //Crear un array vacio llamado listaGenerica

 let listaGenerica = [];

 // 2. Crear una lista que se llame "LenguagesDeProgramacion" con los siguientes elementos: "JS" "C "C++" "Kotlin" y "Python"

 let lenguagesDeProgramacion = ["JS", "C", "C++", "Kotlin", "python"];

 // 3. Anadir a la lista lenguagesDeProgramacion los elementos "Java " "RUBY " GoLang"

 lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");
 console.log(lenguagesDeProgramacion);

 // 4. Crea una funcion que muestre en la consola los elementos de la lista lenguagesDeProgramacion

 function mostrarLenguajes(lista) {
     for (let i = 0; i < lista.length; i++) {
         console.log(lista[i]);
     }
 }
 
 console.log(mostrarLenguajes(lenguagesDeProgramacion));

 console.log("---------------------------------------------------------------");

 // 5. Crear una funcion que muestre la lista lenguagesDeProgramacion en orden inverso.

 function mostrarLenguajesInverso(lista) {
     for (let i = lista.length - 1; i >= 0; i--) {
         console.log(lista[i]);
     }
 }
  console.log(mostrarLenguajesInverso(lenguagesDeProgramacion));
  console.log("---------------------------------------------------------------");
  // 6. Crea una funcion que calcule el promedio de los elementos en una lista de numeros
  function calcularPromedio(lista) {
     let suma = 0;
     for (let i = 0; i < lista.length; i++) {
         suma += lista[i];
     }
     return suma / lista.length;
 }
  console.log("El promedio de los elementos de la lista es: " + calcularPromedio([1, 2, 3, 4, 5]));
  console.log("---------------------------------------------------------------");

  // 7. Crea una funcion que muestre en la consola el numero mayor y menor de una lista.
  function mostrarNumeros(lista) {
     let maximo = lista[0];
     let minimo = lista[0];
     for (let i = 1; i < lista.length; i++) {
         if (lista[i] > maximo) {
             maximo = lista[i];
         }
         if (lista[i] < minimo) {
             minimo = lista[i];
         }
     }
     console.log("El numero mayor es: " + maximo);
     console.log("El numero menor es: " + minimo);
 }
  console.log(mostrarNumeros([1, 2, 3, 4, 5]));
  console.log("---------------------------------------------------------------");

  // 9. Crea una funcion que devuelva la posicion en la lista donde se se encuentra un elemnto pasado 
  // por parametro en caso contrario que devuelva -1 si no existe en la lista
  function buscarElemento(lista, elemento) {
     for (let i = 0; i < lista.length; i++) {
         if (lista[i] === elemento) {
             return i;
         }
     }
     return -1;
 }
 console.log("La posicion del elemento 3 en la lista es: " + buscarElemento([1, 2, 3, 4, 5], 3));
 console.log("------------------------------------------------");

 // 10. Crea una funcion que reciba 2 listas de numeros y devulva una lista nueva con la suma de los elementos uno a uno.
  function sumarListas(lista1, lista2) {
     let listaResultado = [];
     if (lista1.length!== lista2.length) {
         console.log("Las listas deben tener la misma longitud");
         return listaResultado;
     }
     for (let i = 0; i < lista1.length; i++) {
         listaResultado.push(lista1[i] + lista2[i]);
     }
     return listaResultado;
 }
  console.log(sumarListas([1, 2, 3], [4, 5, 6]));
  console.log("---------------------------------------------------------------");

 // 11. Crea una funcion que reciba una lista de nuemeros y deuelva una lista nueva con el cuadrado de cada numero
  function calcularCuadrados(lista) {
     let listaResultado = [];
     for (let i = 0; i < lista.length; i++) {
         listaResultado.push(Math.pow(lista[i], 2));
     }
     return listaResultado;
 }
  console.log(calcularCuadrados([1, 2, 3]));
  console.log("---------------------------------------------------------------");
