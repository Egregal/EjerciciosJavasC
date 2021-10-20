// EJERCICIO 6

// Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, pasando el número por parámetro devolverá el número de cifras.

let num = prompt("Introduce un número entero positivo para saber cuantas cifras tiene");
let nCifras = Array.from(num);

alert(nCifras.length);



//-------------------------------------

// METODO DE DANI

let numero = prompt("Introduce un número entero positivo para saber cuantas cifras tiene");
let resultado = "";

const cifras = (numero) => {
    
    if (numero > 0 && !numero.includes(".")) {
        resultado = numero.toString().length;
        alert("El numero " + numero + "contiene " + resultado + " numero enteros positivos");
    }
    else {
        return "El número es incorrecto";
    }
}

resultado = cifras(numero);
alert(resultado);