function divisao (dividendo, divisor) {
    let div = dividendo / divisor   
    let resto = dividendo % divisor

    return `Divisao = ${div.toFixed(2)}
Resto = ${resto}`
}

console.log(divisao(10, 3))

