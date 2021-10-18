// EJERCICIO 2

// Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados por el usuario(prompt).Crea un método donde pasamos como parámetros entre que números queremos que los genere, podemos pedirlas al usuario antes de generar los números.Este método devolverá un número entero aleatorio.Muestra estos números por consola.

let cantidad = prompt("Introduce la cantidad de numeros que quieres que se generen");
let limInf = parseInt(prompt("Introduce límite inferior desde donde empiece a generar numeros aleatorios"));
let limSup = parseInt(prompt("Introduce límite superior hasta donde empiece a generar numeros aleatorios"));
let numeros = [];

function numeroAleatorio(cantidad, limInf, limSup) {
    for (let i = 1; i <= cantidad; i++) {
        numeros.push(parseInt(Math.random() * (limSup - limInf) + limInf));
    }
}
numeroAleatorio(cantidad, limInf, limSup);
console.log(numeros);