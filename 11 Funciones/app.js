'use strict';
// Las funciones tambien se denominan methods.
// Una funcion es un bloque de codigo que se ejecuta cada vez que lo llamamos.

function MostrarMesaje(/*Parametros*/) { // CamelCase -> La primer letra de cada palabra en Mayus
    console.log('Hola! Llamaste a la funcion "MostrarMensaje"');
    return "Hola soy el return de la funcion"; // puede devolver un valor
}

let xd = MostrarMesaje();  // llamo func y asigno su return a xd
console.log(xd); // imprimo contenido de xd

console.log(Math.max(2, 4)); // Ej de func ya definida por JS
// Devuelve el maximo de una lista de numeros ->> 4

// Otra forma de definir funcion
const mitad = function (num) {
    return num / 2;
};
console.log(mitad(10));

let n1 = prompt("dime una palabra");
let n2 = prompt("dime otra palabra");

//------------------------------------//

function unirPalabras(word1, word2, word3 = false) { // word3 es un parametro default, un parametro que es opcional de pasar

    let palabrasUnidas = word1 + ' ' + word2 + ' ' + word3;
    return palabrasUnidas

}

let result = unirPalabras(n1, n2);
//alert(result);


// Si no se le pasa exponente, la funcion toma por default que es al cuadradao (exponent = 2)
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(4)); // -> 16
console.log(power(2,6)); // -> 64



//-------- Funcion dentro de funcion --//

function mostrarConsola(n1, n2) {
    console.log(n1 + ' ' + n2);
}

function enDocumento(n1, n2) {
    document.write(n1 + ' ' + n2);
}

function mostrar(n1,n2,n3 = false) {
    if(n3 == false) { // si es false muestra en consola
        mostrarConsola(n1,n2);
    } else { // si es true muestra en el doc
        enDocumento(n1,n2);
    }
}

mostrar(n1,n2, true)