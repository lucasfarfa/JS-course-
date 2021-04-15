'use strict';

var num = 1;
var num2 = 5;

// Suma
var resultado = num + num2;
console.log(`${num} + ${num2} es ${resultado}`);
// Resta
resultado = num - num2;
console.log(`${num} - ${num2} es ${resultado}`);
// Divisionn
resultado = num / num2;
console.log(`${num} / ${num2} es ${resultado}`);
// Multiplicaicion
resultado = num*num2;
console.log(`${num} x ${num2} es ${resultado}`);

// Ternario - picl one of two values based on a third value.
console.log(true ? 1 : 2); // -> 1
console.log(false ? 1 : 2); // -> 2
/* condicion ? accion si true : accion si false */

// == compara contenido o valor
// === compara contenido y tipo de dato (conviene usar esto)
// > Mayor que >= Mayor igual que ( > = )
// < Menor que <= Menor igual que( < = )
// != diferente contenido (! = )
// !== diferente contenido y dato (! = = )  (conviene usar esto)
// - ->> sirve para negar un numero (no logicamente, ahi se usa !)

// AND && -> Si ambas son verdaderas da true
// OR || -> Si una es verdadera da true

/** null || "hola" -> devuelve "Hola"
 *  "lucas" || "martin" -> devuelve lucas. (prioriza el de la izq)
 * && y || evaluan solo la parte derecha si es NECESARIO (short-circuit evaluation)
*/

// NOT ! -> Si una es falsa de false