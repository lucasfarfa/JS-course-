'use strict';

// Alertas dentro del navegador
alert('Mensaje de alerta.');

// Ventannas de confirmacion
/** Aceptar o Cancelar **/
let result = confirm('Cuidado que explota todo!'); // devuelve true o false
alert(result);

// Ventana de ingreso de datos. [No es muy popular su uso.]
// 'Lo que pregunto al usuario' , 'Respuesta por default'
let res = prompt('En serio queres que explote todo?','Claro que Yes!');
alert(`Dijiste que ${res}`);