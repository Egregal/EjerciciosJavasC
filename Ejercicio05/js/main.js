// EJERCICIO 5

// Crea una aplicación que nos convierta un número en base decimal a binario.Esto lo realizará un método al que le pasaremos el número como parámetro, devolverá un String con el numero convertido a binario.Para convertir un número decimal a binario, debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división formara el número binario, de abajo a arriba.

let num = parseInt(prompt("Indica que número quieres convertir en binario"));
let binario = [];
let pasarABinario = "";

num = parseInt(num)

const pasarABinario = (num) => {
    if (num == 0) {
        binario.push(0);
    }

    while (num > 0) {
        binario.push(num % 2);
        num = parseInt(num / 2);
    }

    binario = binario.reverse(binario);
    for (let i = 0; i < binario.length; i++) {
        pasarABinario = pasarABinario + toString(binario[i]);
    }
}
alert(binario);

//-----------------------------

let num = parseInt(prompt("Introduce numero"))
toString