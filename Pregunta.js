export default class Pregunta {
    constructor(texto, categoria, respuestaCorrecta, respuestasPosibles) {
        this.texto = texto;
        this.categoria = categoria; // Ciencias, Historia, Geografía, Literatura, Deportes, Cine, Videojuegos
        this.respuestaCorrecta = respuestaCorrecta;
        this.respuestasPosibles = respuestasPosibles; // Es un vector de strings
    }
}
