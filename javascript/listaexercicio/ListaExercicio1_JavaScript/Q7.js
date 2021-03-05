function equacao (a = 0, b = 0, c = 0) {
    const resultado = []
    let delta = Math.sqrt(Math.pow(b, 2) - 4*a*c)


    let raizPos = (-b + delta) / (2*a)
    let raizNeg = (-b - delta) / (2*a)

    if (isNaN(delta)) {
        return "Delta eh negativo"
    } else {
        resultado.push(raizPos.toFixed(2), raizNeg.toFixed(2))
        return resultado
    }
}

console.log(equacao(3, -15, 2))
console.log(equacao(4, 2, -6))
console.log(equacao(7, 3, 4))