function retornarMaiorMenor (array) {
    let maior = array[0]
    let menor = array[0]

    for (let i = 0; i <= array.length; i++) {
        if (array[i] > array[i - 1]) {
            if (array[i] > maior) maior = array[i]
        }
        else if (array[i] < array[i - 1]) {
            if (array[i] < menor) menor = array[i]
        }
    }

    return `Maior: ${maior}, Menor: ${menor}`
}

const numeros = [9, 11, 3, 5, 2, 17, 4, 5, 12, 1]
console.log(retornarMaiorMenor(numeros))