/**
 * Devuelve un número entero al azar que esté en el intervalo entre dos números (el mínimo está incluido, el máximo no está incluido).
 * @param {Number} minimo Número mínimo.
 * @param {Number} maximo Número máximo.
 * @returns Número al azar.
 */
function numeroAlAzar(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}

/**
 * Dado un vector y un número, devuelve un nuevo vector con esta cantidad de elementos pero elegidos al azar del vector original.
 * @param {Array} vector Vector original.
 * @param {Number} cantidad Cantidad de elementos a seleccionar (debe ser menor que vector.length).
 * @return Vector con los elegidos al azar.
 */
function elegirAlAzarDelVector(vector, cantidad) {
    const longitudVectorOriginal = vector.length;
    if (cantidad > longitudVectorOriginal) {
        return [];
    }

    let nuevoVector = [], i = 0;
    while(i < cantidad) {
        const random = numeroAlAzar(0, longitudVectorOriginal);
        if(nuevoVector.includes(vector[random])) {
            continue;
        }
        nuevoVector.push(vector[random]);
        i++;
    }
    return nuevoVector;
}

