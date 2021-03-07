function juroSimples (capital, taxaJuros, tempo) {
    let juros = capital * taxaJuros * tempo
    return capital + juros
}

function juroComposto (capital, taxaJuros, tempo) {
    let juros = (1 + taxaJuros) ** tempo
    return (capital * juros).toFixed(2)
}

console.log(juroSimples(100, 10/100, 2))
console.log(juroComposto(100, 10/100, 2))
