document.getElementById("mensaje").style.opacity = 0;

function retrazo() {
    setTimeout(mostrarMensaje, 15000);
}

function mostrarMensaje() {
    document.getElementById("mensaje").style.opacity = 1;
}