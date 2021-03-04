function juroSimples (capital, taxaJuros, tempo) {
    let juros = capital * taxaJuros * tempo
    return capital + juros
}

function juroComposto (capital, taxaJuros, tempo) {
    let juros = capital * (Math.pow(1 + taxaJuros, tempo) - 1)
    return capital + juros
}

console.log(juroSimples(1000, 0.006, 3))
console.log(juroComposto(1000, 0.006, 3))