/* Crea una funcion que muestre en pantalla el area y perimetro de una sala rectangular , utilizando la altura y el ancho que se proporcionan
como parametro */

function calcularAreaPerimetro(altura, ancho) {
    // Calcula el area
    let area = altura * ancho;

    // Calcula el perimetro
    let perimetro = 2 * (altura + ancho);

    // Muestra el resultado en pantalla
    console.log(`El area de la sala es: ${area} m²`);
    console.log(`El perimetro de la sala es: ${perimetro} m`);
}

// CRea una funcion que muestre en pantalla el area y perimetro de una sala circular , utilizando su radio que se proporcionara como parametro
// considerando que Pi=3,14

function calcularAreaPerimetroCirculo(radio) {
    // Calcula el area
    let area = Math.PI * Math.pow(radio, 2);

    // Calcula el perimetro
    let perimetro = 2 * Math.PI * radio;

    // Muestra el resultado en pantalla
    console.log(`El area del circulo es: ${area} m²`);
    console.log(`El perimetro del circulo es: ${perimetro} m`);
}