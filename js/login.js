const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email-login").value;
  const password = document.querySelector("#password-login").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = Users.find(
    (user) => user.email === email && user.password === password
  );
  if (!validUser) {
    return alert("Usuario y/o contraseña incorectos");
  }
  alert(`Bienvenido ${validUser.name}`);
  localStorage.setItem("login_success", JSON.stringify(validUser));
  document.querySelector(".btnLogin").classList.add("hidden");
  document.querySelector(".btnCuenta").classList.remove("hidden");
});

/**Olvide mi Pass */

// Mostrar modal para olvidar contraseña
document
  .getElementById("forgotPasswordLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("forgotPasswordModal").style.display = "block";
  });

// Cerrar modal cuando se hace clic en el botón de cierre
document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("forgotPasswordModal").style.display = "none";
  });

// Enviar formulario para recuperar contraseña
document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    retrievePassword(email);
  });

// Función para verificar y mostrar la contraseña recuperada
function retrievePassword(email) {
  const storedUsers = JSON.parse(localStorage.getItem('users'));
  if (storedUsers) {
    const user = storedUsers.find(user => user.email === email);
    if (user) {
      document.getElementById('retrievedPassword').textContent = `Tu contraseña es: ${user.password}`;
    } else {
      document.getElementById('retrievedPassword').textContent = 'El correo electrónico ingresado no coincide.';
    }
  } else {
    document.getElementById('retrievedPassword').textContent = 'No hay usuarios registrados.';
  }
}
