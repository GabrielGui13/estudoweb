function selecionarArray (numeros) {
    let contadorIntervalo = 0
    let contadorFora = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 10 && numeros[i] <= 20) contadorIntervalo++
        else contadorFora++
    }

    return `${contadorIntervalo} numeros dentro do intervalo e ${contadorFora} numeros fora do intervalo`
}

const sim = [1, 3, 5, 6, 7, 9, 11, 13, 15, 17, 19]
console.log(selecionarArray(sim))