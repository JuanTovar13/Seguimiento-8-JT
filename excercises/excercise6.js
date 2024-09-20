function sumarHastaNumero(num) {
    // TODO: Dado un número y sumar los números del 1 hasta ese número usando while.
    let numero = 1;
    let i = 1;
    while(i <= num) {
        console.log(i)
        i++;
        const sumanumero = numero += i
    }
console.log(sumanumero)
}
console.log("-----------------------------------")
console.log("EJERCICIO 6")
console.log("-----------------------------------")
sumarHastaNumero(100)