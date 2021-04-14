'use strict';

// While: mientras que se cumpla la condicion, el bucle se sigue ejecutando.

let dato = 5;

while (dato <= 7) {
    console.log(`El dato vale ${dato}`);
    dato ++;
} // Nos imprime hasta el 7 incluido.

// Do - While: primero realiza una instruccion y luego evalua si tiene que seguir ejecutando o no.

dato = 1;

do {
    console.log(`El dato vale ${dato}`);
    dato++;
} while (dato <= 5);