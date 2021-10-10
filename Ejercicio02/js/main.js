// EJERCICIO 2

// Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados por el usuario(prompt).Crea un método donde pasamos como parámetros entre que números queremos que los genere, podemos pedirlas al usuario antes de generar los números.Este método devolverá un número entero aleatorio.Muestra estos números por consola.

var cantidad = prompt("Introduce la cantidad de numeros que quieres que se generen");
var limInf = prompt("Introduce desde que numero mínimo empezará a generar numeros aleatorios");
var limSup = prompt("Introduce hasta que numero máximo empezará a generar numeros aleatorios");
var numeros = [];

function numeroAleatorio(cantidad, limInf, limSup) {
    for (let i = 1; i <= cantidad; i++) {
        numeros.push(Math.random() * (limSup - limInf) + limInf);
    }
}

numeroAleatorio(cantidad, limInf, limSup);
console.log(numeros);