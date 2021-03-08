function imprimirParesImpares (arrayNumeros) {
    let contadorPar = 0
    let contadorImpar = 0
    for (let i = 0; i <= arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 == 0) contadorPar++
        else if (arrayNumeros[i] % 2 == 1) contadorImpar++
    }

    return `${contadorImpar} numeros impares e ${contadorPar} numeros pares`
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(imprimirParesImpares(numeros))