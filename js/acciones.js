const inicio = document.querySelector(".inicio");
const btnCloseLogin_inicio = document.querySelector(".icon-close");
const btnClose7Pasos_inicio = document.querySelector(".icon-close");

btnCloseLogin_inicio.addEventListener('click', () => {
    inicio.classList.remove('activo-popup');
});

const user = JSON.parse(localStorage.getItem('login_success')) || false
if (!user) {
    document.querySelector(".btnLogin").classList.remove("hidden");
    document.querySelector(".btnCuenta").classList.add("hidden");
} else {
    document.querySelector(".btnLogin").classList.add("hidden");
    document.querySelector(".btnCuenta").classList.remove("hidden");
}

function enviar(id) {
    switch (id) {
        case 'pasos':
            window.location = 'https://youtu.be/zSpH-mIkAqk?list=PLZ0yIOXiQ3mVXGKEiH-oGkBlFjC1e2QkI'
            break;

        case 'login':
            window.location = 'index.html'
            break;

        case 'cuenta':
            window.location = 'cuenta.html'
            break;

        default:
            window.location.href = 'error.html'
            break;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const pasoSiete = localStorage.getItem('pasoSiete');

    if (pasoSiete === 'true') {
        getActivarCertificado('errorCertificado', 'formularioCertifcado');
    } else {
        getActivarCertificado('formularioCertifcado', 'errorCertificado');
    }
});

function getActivarCertificado(idOcultar, idMostrar) {
    const ocultar = document.getElementById(idOcultar);
    ocultar.classList.add('hidden');
    const mostrar = document.getElementById(idMostrar);
    mostrar.classList.remove('hidden');
}

/**Funcion de Checkbox */
function mostrarAlerta() {
    var checkbox = document.getElementById("checkbox-signup");
    var alerta = document.getElementById("alerta");

    if (!checkbox.checked) {
        alerta.style.display = "block";
    } else {
        cerrarAlerta()
    }
}

function cerrarAlerta() {
    var alerta = document.getElementById("alerta");
    alerta.style.display = "none";
}


/**Clases */

const caret_back = document.getElementsByName(".caret-forward");
caret_back.addEventListener('click', () => {
    const btnMakeExamn = document.querySelector(".make-exam").textContent = 'hola';
});