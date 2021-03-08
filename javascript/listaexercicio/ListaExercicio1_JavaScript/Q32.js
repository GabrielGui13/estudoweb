function mediaAritmetica (numeros) {
    let divisor = 0
    let soma = 0

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
        divisor++
    }

    return `A media eh ${soma / divisor}`
}

const numeros = [3, 6, 9, 10]
console.log(mediaAritmetica(numeros))