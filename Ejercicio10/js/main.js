// EJERCICIO 10

// Crea un array de números de un tamaño pasado por prompt, el array contendrá números aleatorios primos entre los números deseados, por último, nos indicar cual es el mayor de todos.Haz un método para comprobar que el número aleatorio es primo, puedes hacer todos los métodos que necesites.

let tamaño = prompt("Introduce el tamaño del array");
tamaño = parseInt(tamaño);
let primo = true;
let array = [];
let num;

const numRandom = () => {
    num = Math.floor(Math.random() * (100 - 3) + 3);
    return num;
}

const calculaPrimo = (valor) => {
    primo = true;
    for (let a = 2; a < valor; a++) {
        if (valor % a == 0) {
            primo = false;
        }
    }
}

const añadirArray = () => {
    while (array.length < tamaño) {
        calculaPrimo(numRandom());
        if (primo) {
            array.push(num);
        }
    }
}

añadirArray();

console.log(array);



//---------------------------------------//
// EJERCICIO 9 

    // let array = [];
    // let tamaño = prompt("Introduce tamaño del array");
    // tamaño = parseInt(tamaño);
    // let suma = 0;

    // for (let i = 1; i <= tamaño; i++) {
    //     array.push(Math.random() * (10 - 0));
    // }

    // array.forEach(numero => {
    //     suma = suma + numero;
    // });

    // console.log(array);
    // console.log(suma);