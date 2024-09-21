function contarMultiplosDe3() {
    // TODO: Contar cuántos números entre 1 y 50 son múltiplos de 3.
    let multide3 = 0
    for(let i = 1; i <= 50; i++){
        if (i % 3 === 0){
            multide3 ++;
        }
        
    }
    console.log(multide3)

}
console.log("-----------------------------------")
console.log("EJERCICIO 4")
console.log("-----------------------------------")
contarMultiplosDe3()