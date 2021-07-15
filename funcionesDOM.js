import Pregunta from "./Pregunta.js";
import vectorPreguntas from "./vectorPreguntas.js";

const paginaPrincipal = document.getElementById("paginaPrincipal");
const paginaInstrucciones = document.getElementById("paginaInstrucciones");
const paginaPedirDatos = document.getElementById("paginaPedirDatos");
const paginaJuego = document.getElementById("paginaJuego");
const paginaPuntuaciones = document.getElementById("paginaPuntuaciones");

paginaInstrucciones.hidden = true;
paginaPedirDatos.hidden = true;
paginaJuego.hidden = true;
paginaPuntuaciones.hidden = true;

let preguntasPartida = [];
const numeroPreguntasPorPartida = 10;


function irPaginaInstrucciones() {
    paginaPrincipal.hidden = true;
    paginaInstrucciones.hidden = false;
}

function volverPaginaInstrucciones() {
    paginaPrincipal.hidden = false;
    paginaInstrucciones.hidden = true;
}

function irPaginaPedirDatos() {
    paginaPrincipal.hidden = true;
    paginaPedirDatos.hidden = false;
}

function comenzarPartida() {
    const pedirNombreUsuario = document.getElementById("pedirNombreUsuario");
    if (pedirNombreUsuario.value == "") {
        pedirNombreUsuario.focus();
        return;
    }

    preguntasPartida = funcionesJuego.elegirAlAzarDelVector(vectorPreguntas, numeroPreguntasPorPartida);

    paginaPedirDatos.hidden = true;
    paginaJuego.hidden = false;
}

function irPaginaPuntuaciones() {
    paginaPrincipal.hidden = true;
    paginaPuntuaciones.hidden = false;
}

function volverPaginaPuntuaciones() {
    paginaPrincipal.hidden = false;
    paginaPuntuaciones.hidden = true;
}

/**
 * Dibuja una pregunta en la pantalla de juego.
 * @param {Pregunta} pregunta La pregunta a dibujar.
 */
function dibujarPregunta(pregunta) {
    const textoCategoria = document.getElementById("textoCategoria");
    lugarCategoria.innerHTML += `${pregunta.categoria()}`;
}
