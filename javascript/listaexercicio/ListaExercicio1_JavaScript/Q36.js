function multiplicarArray (array, numero) {
    const arrayFinal = []
    for (let i = 0; i < array.length; i++) {
        arrayFinal.push(array[i] * numero)
    }

    return arrayFinal
}

const numerosParaMultiplicar = [1, 2, 3, 4, 5]
console.log(multiplicarArray(numerosParaMultiplicar, 3))