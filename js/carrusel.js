let pausa = false;

function pausar (estado) {
    pausa = estado;
}

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
    if (!pausa) {
        const viejo = activo();

        if (viejo.nextElementSibling == null) {
            nuevo = viejo.parentElement.children[0];
        } else {
            nuevo = viejo.nextElementSibling;
        }

        elegir(nuevo, viejo);
    }
}

function activo() {
    const actual = document.querySelector(".indicador[data-activo]");
    return actual;
}

setInterval(cambiar, 4000);