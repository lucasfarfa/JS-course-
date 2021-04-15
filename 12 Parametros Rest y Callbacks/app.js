'use strict';

// Parametros REST: cuando no sabemos que cantidad de parametros vamos a recibir dentro de una funcion
// usamos estos parametros.

function listadoPaises(p1, p2, ...p) {
    console.log(p1);
    console.log(p2);
    console.log(p);
}

// ... -> indica que es un parametro rest y javascript lo formatea dentro de un array

listadoPaises("Francia", "Argentina", "Bolivia", "Brasil"); // -->> los param ...p los imprime dentro de un array

// Callbacks -->> se usa mucho

// multilpicar es un paramaetro que recibe una funcion
function sumar(n1, n2, multiplicar) {
    let suma = n1 + n2;
    multiplicar(suma);
    return suma;
}

sumar(5, 7, function (d) {
    console.log("La suma es " + d);
    console.log("La multi es " + d * 2); // multiplica  12*12
});
