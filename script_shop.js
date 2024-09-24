// The transition from the 2 pictures from Shop
var imagenes = ["Images_Shop/big_shop.png", "Images_Shop/big_shop(2).png"];
var imagenActual = 0;

// Change the another picture
function mostrarImagenAnterior() {
  imagenActual = (imagenActual + imagenes.length - 1) % imagenes.length;
  document.getElementById("imagen-actual").src = imagenes[imagenActual];
}

// Change the next picture
function mostrarImagenSiguiente() {
  imagenActual = (imagenActual + 1) % imagenes.length;
  document.getElementById("imagen-actual").src = imagenes[imagenActual];
}

// Function from the buttons
document
  .getElementById("boton-izquierdo")
  .addEventListener("click", mostrarImagenAnterior);
document
  .getElementById("boton-derecho")
  .addEventListener("click", mostrarImagenSiguiente);
