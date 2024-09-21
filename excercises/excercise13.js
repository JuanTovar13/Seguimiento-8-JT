function buscarNombre(nombres, nombreABuscar) {
    // TODO: Buscar si un nombre específico está en una lista de nombres usando un ciclo for.
    
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === nombreABuscar) {
            return true;
        }
    }
    return false
}
const nombres = ["Ana", "Juan", "Pedro", "Laura", "Sofía"];
let nombreABuscar = "Pedro";

if (buscarNombre(nombres, nombreABuscar)) {
    console.log(nombreABuscar + " está en la lista");
} else {
    console.log(nombreABuscar + " no está en la lista");
}
console.log("-----------------------------------")
console.log("EJERCICIO 13")
console.log("-----------------------------------")

buscarNombre(nombres, "Pedro")