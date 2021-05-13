const simbolomais = function(numero) {
    let texto = ''

    for (let i = 0; i < numero; i++) {
        texto += '+'
    }

    return texto
}

console.log(simbolomais(2))
console.log(simbolomais(4))