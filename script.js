/* =====================================
   ELEMENTOS DE LA PÁGINA
===================================== */

const pantallaPregunta = document.getElementById("pantalla-pregunta");
const pantallaFinal = document.getElementById("pantalla-final");

const tarjeta = document.getElementById("tarjeta");
const botonSi = document.getElementById("boton-si");
const botonNo = document.getElementById("boton-no");

const contenedorCorazones = document.getElementById("corazones");

/* =====================================
   CONFIGURACIÓN DEL BOTÓN NO
===================================== */

// Mensajes adaptados a las imágenes
const mensajesNo = [
    "¿Por que no :c?",
    "piensalo bien...",
    "Estás segura?",
    "100% segura?",
    "ya no me quieres??",
    "¿De verdad? 🥺",
    "No me hagas esto...",
    "Última oportunidad...",
    "Por favor, no me digas que no...",
    "No me dejes así 😢",
    "¿No quieres estar conmigo?",
];

let intentos = 0;
let escalaSi = 1;
let escalaNo = 1;

/* =====================================
   BOTÓN NO
===================================== */

botonNo.addEventListener("click", function () {

    // Cambiar el texto del botón rojo
    const indice = intentos % mensajesNo.length;
    botonNo.textContent = mensajesNo[indice];

    intentos++;

    // Aumentar el botón verde de forma progresiva
    escalaSi += 0.25; // Crecimiento más suave e individual
    botonSi.style.transform = `scale(${escalaSi})`;

    // Reducir el botón rojo gradualmente
    escalaNo = Math.max(0.3, escalaNo * 0.85); // Evitamos que desaparezca por completo inmediatamente
    botonNo.style.transform = `scale(${escalaNo})`;

});

/* =====================================
   BOTÓN SÍ
===================================== */

botonSi.addEventListener("click", function () {

    // Ocultar la primera pantalla
    pantallaPregunta.classList.remove("activa");

    // Mostrar la pantalla romántica
    pantallaFinal.classList.add("activa");

    // Crear los corazones flotantes
    crearCorazones();

});

/* =====================================
   GENERADOR DE CORAZONES
===================================== */

function crearCorazones() {

    if (contenedorCorazones.dataset.iniciado === "true") {
        return;
    }

    contenedorCorazones.dataset.iniciado = "true";

    const simbolos = ["❤️", "💕", "💗", "💖", "💘"];

    setInterval(function () {

        const corazon = document.createElement("span");
        corazon.classList.add("corazon");

        corazon.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        corazon.style.left = Math.random() * 100 + "%";

        corazon.style.fontSize =
            (15 + Math.random() * 25) + "px";

        corazon.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        contenedorCorazones.appendChild(corazon);

        setTimeout(function () {
            corazon.remove();
        }, 8500);

    }, 300);

}