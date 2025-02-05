let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");


//esta funcion es para poder agregar nombres a la lista o arreglo.
function agregarAmigo(){
    if (document.getElementById("amigo").value!= "") {
        //Añadimos al array los valores del input.
        amigos.push(document.getElementById("amigo").value);
        console.log("Añadimos al array los valores del input")
        limpiarCaja();
    }else {
        alert("Debes ingresar un nombre de amigo");
    }
    console.log(amigos);
    mostrarAmigos();
    
}

//Esta funcion corresponde a la limpieza de casilla donde se va a escribir el nombre.
function limpiarCaja(){
    document.getElementById("amigo").value = "";
    console.log("Limpiamos la caja de texto")
}

//Crearemos la funcion de la lista para ver los nombres a realizar el sorteo.
function mostrarAmigos(){
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const elemento = document.createElement("li");
        elemento.textContent = amigos[i];
        listaAmigos.appendChild(elemento);
    }

}

//Generamos la funcion del sorteo.
function sortearAmigo() {
    if (amigos.length === 0) {
       resultado.innerHTML = ("no hay nombres a sortear");
        return;
        
    }
    const aleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[aleatorio];
    resultado.innerHTML = `El amigo secreto tramposo fue es: ${amigoSecreto}`;
    // Ahora vamos a deshabilitar el boton "sortear" .
    document.getElementById("sortear").disabled = true;
    // Añadimos un evento de click para habilitar el boton "sortear" nuevamente
    document.getElementById("sortear").addEventListener("click", function() {
        document.getElementById("sortear").disabled = false;
    });
    // Borramos el array para que no se repita el sorteo
    amigos.splice(0, amigos.length);
    console.log("Borramos el array para que no se repita el sorteo");
    console.log(amigos);
    mostrarAmigos(); // Actualizamos la lista para ver los cambios.

    

}


