'use strict'; 

// viene a sustituir a las callbacks, te podes evitar bastante codigo

function sumar(n1, n2, multiplicar) {
    let suma = n1 + n2;
    multiplicar(suma);
    return suma;
}

sumar(5, 7, d => {
    console.log("La suma es " + d);
    console.log("La multi es " + d * 2); // multiplica  12*12
});

// (parametro,p2,pn..) => {accion};  "this input(param) produces this result(body function)"
// reemplaza la palabra function

/** Cuando solo hay un parametro, se puede omitir los partenesis 
 * y si el body es una simple expresion no hacen falta las lalves {}
 * 
 * const square1 = (x) => {return x * x;};
 * const square2 = x => return x * x;
*/

/** claro ejemplo de closure y environment. */

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5)); // --> 10
/** multiplied is called and creates an enviroment in wwich its factor param is bount to 2.
 * The function value it returns, which is stored in twice, remembers this environment.
 * So when that is called, it multiplies its argument by 2.
 */

// Funcion recursive.
/** Recursion allows some functions to be written inn a different style.
 * Tke for ex this alt implementation of power:
 */

function power(base, exponent) {
    if (exponent == 0) return 1;
    else return base * power(base, exponent - 1);
}
// The function calls itself multiple times with ever smaller exponentes to
// achieve the repeated multiplication