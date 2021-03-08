function imprimirNegativo (numeros) {
    let contador = 0
    for (let i = 0; i <= numeros.length; i++) {
        if (numeros[i] < 0) contador++
    }

    return `Tem ${contador} negativos`
}

const array = [1, 3, 5, -1, -8]
console.log(imprimirNegativo(array))