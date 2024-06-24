document.addEventListener("DOMContentLoaded", function() {
    const userJSON = localStorage.getItem("login_success");
    
    if (userJSON) {
        const user = JSON.parse(userJSON);

        if (user.name && user.email && user.password) {
            const name = user.name;
            const email = user.email;
            const pass = user.password;

            const nameField = document.querySelector('#user-cuenta').value = name;
            const emailField = document.querySelector('#email-cuenta').value = email;
            const passwordField = document.querySelector('#password-cuenta').value = pass;

        } else {
            console.error("Los datos del usuario en el almacenamiento local están incompletos.");
        }
    } else {
        console.error("No se encontraron datos de usuario en el almacenamiento local.");
        window.location.href = 'index.html';
    }
});

const logout = document.querySelector("#logout");
logout.addEventListener("click", () => {
  alert("Hasta Pronto!");
  localStorage.removeItem("login_success");
  window.location.href = "index.html";
});
