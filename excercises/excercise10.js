function adivinarNumero() {
    // TODO: Crear un programa que adivine un número entre 1 y 100 usando while.
let numeroMin = 1;
let numeroMax = 100;
let intento;
let encontrado = false;
let numero = Math.floor(Math.random() * 100) + 1;

while (!encontrado) {
    intento = Math.floor((numeroMin + numeroMax) / 2);
    
    if (intento === numero) {
        console.log("El numero es: " + intento);
        encontrado = true;
    } else if (intento < numero) {
        console.log(intento);
        numeroMin = intento + 1;
    } else {
        console.log(intento);
        numeroMax = intento - 1;
    }
}
}
console.log("-----------------------------------")
console.log("EJERCICIO 10")
console.log("-----------------------------------")
adivinarNumero()