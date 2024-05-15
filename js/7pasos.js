var index = 0;
var divs = document.querySelectorAll('.inicio > div');

function mostrarDiv(index) {
    divs.forEach(function (div, i) {
        div.style.display = (i === index) ? 'block' : 'none';
    });
}

function avanzar() {
    var nextIndex = index + 1;
    if (nextIndex >= divs.length) {
        nextIndex = 0;
    }

    while (nextIndex !== index && divs[nextIndex].classList.contains('desactivo')) {
        nextIndex++;
        if (nextIndex >= divs.length) {
            nextIndex = 0;
        }
    }

    if (nextIndex !== index) {
        index = nextIndex;
        mostrarDiv(index);
    }
}


function retroceder() {

    var prevIndex = index - 1;

    if (prevIndex < 0) {
        prevIndex = divs.length - 1;
    }

    while (prevIndex !== index && divs[prevIndex].classList.contains('desactivo')) {
        prevIndex--;
        if (prevIndex < 0) {
            prevIndex = divs.length - 1;
        }
    }

    if (prevIndex !== index) {
        index = prevIndex;
        mostrarDiv(index);
    }
}

mostrarDiv(index);


/**-------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const pasoUno = localStorage.getItem('pasoUno');
    const pasoDos = localStorage.getItem('pasoDos');
    const pasoTres = localStorage.getItem('pasoTres');
    const pasoCuatro = localStorage.getItem('pasoCuatro');
    const pasoCinco = localStorage.getItem('pasoCinco');
    const pasoSeis = localStorage.getItem('pasoSeis');

    // Continuar con cada paso según el progreso del usuario
    if (pasoUno === 'true') {
        activarPaso('paso2');
    }
    if (pasoDos === 'true') {
        activarPaso('paso3');
    }
    if (pasoTres === 'true') {
        activarPaso('paso4');
    }
    if (pasoCuatro === 'true') {
        activarPaso('paso5');
    }
    if (pasoCinco === 'true') {
        activarPaso('paso6');
    }
    if (pasoSeis === 'true') {
        activarPaso('paso7');
    }
});

function activarPaso(idPaso) {
    const paso = document.getElementById(idPaso);
    paso.classList.remove('desactivo');
}
