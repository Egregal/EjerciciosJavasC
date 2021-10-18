// EJERCICIO 1

// Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los valores necesarios para calcular el área.Para ello has de crear un método por cada figura para calcular cada área, este devolverá un número real.Muestra el resultado por consola.Aquí te mostramos que necesita cada figura: • Circulo: (radio ^ 2) * PI • Triangulo: (base * altura) / 2 • Cuadrado: lado * lado

// COPIADO DEL EJERCICIO 4 DE LA ANTERIOR HOJA DE EJERCICIOS

const PI = 3.1416;
let radio = prompt("Introduce el radio del círculo");
let result;

function areaCirculo() {
    let radio = prompt("Introduce el radio del círculo");
    result = (radio ** 2) * PI;
}

function areaTriangulo() {

}
function areacCuadrado() {

}



radio = parseFloat(radio);
result = PI * radio ** 2;

console.log("El área es " + result);