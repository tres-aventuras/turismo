function elegir(nuevo, viejo) {
    const nuevoElemento = document.querySelector(nuevo.attributes.target.nodeValue);
    
    nuevoElemento.scrollIntoView();
    delete viejo.dataset.activo;
    nuevo.dataset.activo = true;
}

function manejarClick (e) {
    const nuevo = e.target;
    const viejo = activo();
    elegir(nuevo, viejo);
}

function cambiar() {

}

function activo() {
    const actual = document.querySelector(".indicador[data-activo]");
    return actual;
}

setInterval(cambiar, 3000);