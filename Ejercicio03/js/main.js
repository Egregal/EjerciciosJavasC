// EJERCICIO 3

// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false.Un número primo es aquel solo puede dividirse entre 1 y sí mismo.Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

let num = parseInt(prompt("Introduce un numero"));
let primo = true;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        primo = false;
    }
}

alert(primo);

//-----------------------------------------------------------------------//
//------ VERSION JSEM6------------------//


let num = parseInt(prompt("Introduce un número"));
let primo = true;

const calcPrimo = (valorNum) => {
    for (let i = 2; i < valorNum; i++) {
        if (valorNum % i == 0) {
            primo = false;
        }
    }
    alert(primo);
}

calcPrimo(num);
