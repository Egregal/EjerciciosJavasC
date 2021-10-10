// EJERCICIO 6

// Crea una aplicación que nos cuente el número de cifras de un número entero positivo(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, pasando el número por parámetro devolverá el número de cifras.

var numero = prompt("Introduce el número del que quieras saber cuantas cifras tiene");
var cifras = Array.from(numero);

console.log(cifras.length);
