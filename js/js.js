/**Constantes recopiladas */
const fondo = document.querySelector(".fondo");
const loginLink = document.querySelector(".registro-link");
const registerLink = document.querySelector(".login-link");
const btnLogin = document.querySelector(".btnLogin");
const btnCloseLogin = document.querySelector(".icon-close");
const btnCuenta = document.querySelector(".btnCuenta");
/**--------------------- */

/**Eventos Click */
loginLink.addEventListener('click', () => {
    fondo.classList.add('activo');
});

registerLink.addEventListener('click', () => {
    fondo.classList.remove('activo');
});

btnLogin.addEventListener('click', () => {
    fondo.classList.add('activo-popup');
});

btnCloseLogin.addEventListener('click', () => {
    fondo.classList.remove('activo-popup');
});
/**------------- */

btnCuenta.addEventListener('click', () => {
    window.location = "cuenta.html";
});

/**Base Url */

document.addEventListener("DOMContentLoaded", function() {
    var base_url = document.createElement('base');
    base_url.href = 'https://7pasosdeslavacion.github.io/7-Pasos-de-Salvaci-n/';
    document.head.appendChild(base_url);
});
