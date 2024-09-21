function encontrarNombreMasLargo(nombres) {
    // TODO: Encontrar el nombre más largo en una lista de nombres usando un ciclo for.
let nombreMasLargo = "";
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}
return nombreMasLargo
}
const nombres = ["Ana", "Juan", "Pedro", "Laura", "Sofía", "Sebastián"];
let nombreMasLargo = encontrarNombreMasLargo(nombres)


console.log("-----------------------------------")
console.log("EJERCICIO 14")
console.log("-----------------------------------")

encontrarNombreMasLargo(nombres)
console.log(nombreMasLargo)