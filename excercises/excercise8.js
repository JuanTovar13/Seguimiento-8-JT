function calcularFactorial(num) {
    // TODO: Dado un número y calcular su factorial usando un ciclo for.
    let multi = 1;
    for(let i = 1; i <= num; i ++ ){
    multi *= i;
        
}
    return multi;

}
let num = 40
let resultado = calcularFactorial(num)

console.log("-----------------------------------")
console.log("EJERCICIO 8")
console.log("-----------------------------------")
calcularFactorial(40)
console.log(resultado)