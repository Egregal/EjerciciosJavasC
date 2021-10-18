// EJERCICIO 6

// Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, pasando el número por parámetro devolverá el número de cifras.

let num = prompt("Introduce el número del que quieras saber cuantas cifras tiene");
let cifras = Array.from(num);

alert(cifras.length);
