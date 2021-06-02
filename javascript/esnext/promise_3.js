function gerarNumerosEntre (min, max) {
    if (min > max) {
        [max, min] = [min, max] //invertendo valores com destructuring
    }
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min 
        resolve(aleatorio)
    }) 
}

gerarNumerosEntre(10, 30)
    .then(numero => numero * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)