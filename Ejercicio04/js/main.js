// EJERCICIO 4

// Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo realizara mediante un método al que le pasamos el número como parámetro.Para calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si introducimos un 5, realizara esta operación 54321 = 120.

let num = prompt("Introduce número para factorizar");
let factorial = [];
let numFinal = 1;

for (let i = 1; i <= num; i++) {
    factorial.push(i);
}

for (let i = 0; i < factorial.length; i++) {
    numFinal = numFinal * factorial[i];
}
alert(numFinal);

//------------------------------------------//
//---------VERSIÓN EM6 --------------------//

const calculaFactorial = (parametro) => {

    for (let i = 1; i <= parametro; i++) {
        factorial.push(i);
    }

    for (let i = 0; i < factorial.length; i++) {
        numFinal = numFinal * factorial[i];
    }
    alert(numFinal);
}
calculaFactorial(num);