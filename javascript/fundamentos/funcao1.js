// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // 5
imprimirSoma(2) // NaN
imprimirSoma(2, 10, 3, 4 ,5) // 12, ignora os outros valores
imprimirSoma() // NaN, pois somou dois undefined

//Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) // 5
console.log(soma(2)) // Daria 3, pois somou 2 + 1, e nao undefined
console.log(soma()) // NaN, pois o primeiro valor nao foi tratado, caso a = 1, retornaria 2