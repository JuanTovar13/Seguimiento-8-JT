function contarMultiplosDe5y7() {
    // TODO: Contar cuántos números entre 1 y 100 son múltiplos de 5 y de 7.
    let multide5y7 = 0
    for(let i = 1; i <= 100; i++){
        if (i % 5 === 0 && i % 7 === 0){
            multide5y7 ++;
        }
        
    }
    console.log(multide5y7)

}
console.log("-----------------------------------")
console.log("EJERCICIO 7")
console.log("-----------------------------------")
contarMultiplosDe5y7()