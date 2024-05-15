/**Constantes */
const informacion = document.querySelector(".texto");
const recursosBiblicos = document.querySelector("#respaldo_Biblico");
const pasoTres = localStorage.getItem("pasoTres");
const cuenta = document.querySelector(".cuenta");
const users = localStorage.getItem("login_success");
const user = JSON.parse(users);

if (user) {
  cuenta.textContent = user.name;
  cuenta.classList.add("existe");
} else {
  cuenta.classList.remove("existe");
}

function getRevisar() {
  if (cuenta.classList.contains("existe")) {
    window.location.href = "/cuenta.html";
  } else {
    window.location.href = "/index.html";
  }
}

if (!pasoTres) {
  window.location.href = "/7pasos.html";
}

function enviar(id) {
  switch (id) {
    case "pasos.index":
      window.location = "/7pasos.html";
      break;
    case "google":
      var url = "https://www.google.com";
      window.location.href = url;
      break;

    default:
      break;
  }
}

recursosBiblicos.addEventListener("click", () => {
  informacion.classList.add("active");
});

document.getElementById("ocultarTexto").addEventListener("click", function () {
  informacion.classList.remove("active");
});

/**Funciones de Preguntas */

/**Variables (Lets) */
let base_preguntas = readText("/json/paso-4.json");
let interprete_bp = JSON.parse(base_preguntas);
let pregunta;
let btn_correspondiente = [
  document.getElementById("btn1"),
  document.getElementById("btn2"),
  document.getElementById("btn3"),
  document.getElementById("btn4"),
];
let preguntaIndex = 0;
let citaBiblicaPredeterminada = true;

function getVerificarPreguntaAnterior() {
  if (preguntaIndex == 0) {
    style("pregunta_Anterior").display = "none";
  } else {
    style("pregunta_Anterior").display = "block";
  }
}
getVerificarPreguntaAnterior();

function Pregunta_Es(n) {
  pregunta = interprete_bp[n];
  document.getElementById("label").innerHTML = pregunta.categoria;
  document.getElementById("pregunta").innerHTML = pregunta.pregunta;
  document.getElementById("titulo_b").innerHTML = pregunta.cita_biblica;
  document.getElementById("info_b").innerHTML = pregunta.info_cita;

  getMasVersiculos();
  getMasPreguntas();

  style("imagenPregunta").objectFit = pregunta.object_fit;

  if (pregunta.imagen) {
    document
      .getElementById("imagenPregunta")
      .setAttribute("src", pregunta.imagen);
    style("imagenPregunta").height = "350px";
    style("imagenPregunta").width = "600px";
    style("imagenPregunta").padding = "10px";
  } else {
    style("imagenPregunta").display = "0px";
    style("imagenPregunta").width = "0px";
  }
}

function getPreguntasExisten() {
  if (preguntaIndex < interprete_bp.length) {
    Pregunta_Es(preguntaIndex);
    preguntaIndex++;
  } else {
    setTimeout(() => {
      var url = "/Paso-4/html/desicion.html";
      window.location.href = url;
    }, 1000);
  }
}
getPreguntasExisten();

function getMasVersiculos() {
  if (pregunta.cita_biblica2) {
    style("verse-new").display = "block";
  } else {
    style("verse-new").display = "none";
  }
}

function changeCita() {
  if (pregunta.cita_biblica && pregunta.cita_biblica2) {
    if (citaBiblicaPredeterminada) {
      document.getElementById("info_b").innerHTML = pregunta.info_cita;
      document.getElementById("titulo_b").innerHTML = pregunta.cita_biblica;
      citaBiblicaPredeterminada = false;
    } else {
      document.getElementById("info_b").innerHTML = pregunta.info_cita2;
      document.getElementById("titulo_b").innerHTML = pregunta.cita_biblica2;
      citaBiblicaPredeterminada = true;
    }
  }
}

function getPreguntaAnterior() {
  if (preguntaIndex > 0) {
    preguntaIndex--;
    Pregunta_Es(preguntaIndex);
    desordenarRespuestas(pregunta);
    verificar_pregunta();
  }
}

function getMasPreguntas() {
  if (preguntaIndex == 0) {
    style("pregunta_Anterior").display = "none";
  } else {
    style("pregunta_Anterior").display = "block";
  }
}

let btns = [
  document.getElementById("btn1").value,
  document.getElementById("btn2").value,
  document.getElementById("btn3").value,
  document.getElementById("btn4").value,
];
let arr;

function desordenarRespuestas(pregunta) {
  arr = [
    pregunta.respuesta,
    pregunta.incorecta_1,
    pregunta.incorecta_2,
    pregunta.incorecta_3,
  ];

  arr.sort(() => Math.random() - 0.5);

  document.getElementById("btn1").innerHTML = arr[0];
  document.getElementById("btn2").innerHTML = arr[1];
  document.getElementById("btn3").innerHTML = arr[2];
  document.getElementById("btn4").innerHTML = arr[3];
}
desordenarRespuestas(pregunta);

function oprimir_btn(i) {
  if (arr[i] == pregunta.respuesta) {
    btn_correspondiente[i].style.background = "lightgreen";
    setTimeout(() => {
      reiniciar();
      getVerificarPreguntaAnterior();
      desordenarRespuestas(pregunta);
    }, 500);
  } else {
    btn_correspondiente[i].style.background = "lightcoral";
    setTimeout(() => {
      btn_correspondiente[i].style.background = "orange";
    }, 500);
  }
}

function reiniciar() {
  for (const btn of btn_correspondiente) {
    btn.style.background = "#ff8800";
  }
  getPreguntasExisten();
}

/**Otros */

function select_id(id) {
  return document.getElementById(id);
}

function style(id) {
  return select_id(id).style;
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}

/**Scripts para Video de Ayuda */
const videoContainer = document.getElementById("videoContainer");

let isDragging = false;
let offsetX, offsetY;

document.addEventListener("DOMContentLoaded", function () {
  videoContainer.addEventListener("mousedown", startDragging);
  videoContainer.addEventListener("touchstart", startDragging);
  document.addEventListener("mouseup", stopDragging);
  document.addEventListener("touchend", stopDragging);
});

function startDragging(e) {
  e.preventDefault(); // Evitar que el evento por defecto sea ejecutado
  isDragging = true;
  const touch = e.type === "touchstart" ? e.touches[0] : e;
  offsetX = touch.clientX - videoContainer.offsetLeft;
  offsetY = touch.clientY - videoContainer.offsetTop;

  document.addEventListener("mousemove", drag);
  document.addEventListener("touchmove", drag);
}

function stopDragging() {
  isDragging = false;
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("touchmove", drag);
}

function drag(e) {
  e.preventDefault(); // Evitar que el evento por defecto sea ejecutado
  if (isDragging) {
    const touch = e.type === "touchmove" ? e.touches[0] : e;
    const newX = touch.clientX - offsetX;
    const newY = touch.clientY - offsetY;
    const maxX =
      document.documentElement.clientWidth - videoContainer.offsetWidth;
    const maxY =
      document.documentElement.clientHeight - videoContainer.offsetHeight;
    const newLeft = Math.min(maxX, Math.max(0, newX));
    const newTop = Math.min(maxY, Math.max(0, newY));
    videoContainer.style.left = newLeft + "px";
    videoContainer.style.top = newTop + "px";
  }
}

/**Funcion de Checkbox */

function mostrarAlerta() {
  var checkbox = document.getElementById("checkbox");
  var alerta = document.getElementById("alerta");

  if (!checkbox.checked) {
    alerta.style.display = "block";
  } else {
    window.location = "/Paso-4/html/reflexion.html";
  }
}

function cerrarAlerta() {
  var alerta = document.getElementById("alerta");
  alerta.style.display = "none";
}

/**Coffeti*/

function alternarVideo() {
  var video = document.getElementById("my-video");
  var boton = document.getElementById("toggle-button");
  var flecha = document.getElementById("flecha");
  if (video.style.display === "none") {
    video.style.display = "block";
    boton.style.display = "none";
    video.play();
    flecha.style.display = "none";
  } else {
    video.style.display = "none";
    boton.style.display = "block";
    video.pause();
    flecha.style.display = "block";
  }
}

/**Local Storage */

function guardarPasoCompleto() {
  // Guardar el paso completo en el localStorage
  localStorage.setItem("pasoCuatro", "true");
}
