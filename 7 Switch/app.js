'use strict';

var edad = 19;
var texto = '';

/* switch = EN EL CASO QUE ... QUE SUCEDA ESTO Y BREAK */

switch (edad) {
    case 17:
        texto = "Tienes 17, eres menor.";
        break; // Si se cumple, termina el switch. Me ahorro evaluar las otras condiciones sabiendo que van a ser false
    case 18:
        texto = "Eres mayor de edad.";
        break;
    default: 
        texto = "Tienes una edad no evaluada.";
}

console.log(texto);