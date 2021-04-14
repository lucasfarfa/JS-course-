'use strict'; 
// Las funciones tambien se denominan methods.
// Una funcion es un bloque de codigo que se ejecuta cada vez que lo llamamos.

function MostrarMesaje(/*Parametros*/) { // CamelCase -> La primer letra de cada palabra en Mayus
    console.log('Hola! Llamaste a la funcion "MostrarMensaje"');
    return "Hola soy el return de la funcion"; // puede devolver un valor
}

let xd = MostrarMesaje();  // llamo func y asigno su return a xd
console.log(xd); // imprimo contenido de xd