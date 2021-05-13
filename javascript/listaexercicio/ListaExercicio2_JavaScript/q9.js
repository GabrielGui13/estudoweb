const repetir = function (conteudo, vezes) {
    const array = []
    for (let i = 0; i < vezes; i++) {
        array.push(conteudo)
    }
    return array
}

console.log(repetir("codigo", 2))
console.log(repetir(7, 3))