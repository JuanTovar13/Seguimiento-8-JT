function fibonacci() {
    // TODO: Imprimir los primeros 10 números de la secuencia Fibonacci usando while.
    let a = 1, b = 1, numero = 1;

while (numero < 10) {
    console.log(a);
    let signum = a + b;
    a = b;
    b = signum;
    numero++;
}
}

console.log("-----------------------------------")
console.log("EJERCICIO 9")
console.log("-----------------------------------")
fibonacci()