function sumarHastaNumero(num) {
    // TODO: Dado un número y sumar los números del 1 hasta ese número usando while.
    let suma = 0;
    let i = 1;

    while(i <= num) {
        suma += i;
        i++;
          
    }

    return suma;
    
}
let num = 100
let resultado = sumarHastaNumero(num)




console.log("-----------------------------------")
console.log("EJERCICIO 6")
console.log("-----------------------------------")
sumarHastaNumero(100)
console.log(resultado)