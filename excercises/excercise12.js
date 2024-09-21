function contarNombresLargos() {
    // TODO: Contar cuántos nombres de una lista tienen más de 4 letras usando un ciclo for.
    const nombres = ["Ana", "Juan", "Pedro", "Laura", "Sofía", "Sebastián"];
    let numero = 0;

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].length > 4){
            numero ++;
        }
    }
    console.log(numero)
}

console.log("-----------------------------------")
console.log("EJERCICIO 12")
console.log("-----------------------------------")

contarNombresLargos()