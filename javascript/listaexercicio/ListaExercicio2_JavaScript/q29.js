const segundoMaior = function (array) {
    const retorno = array.sort((a, b) => {
        if (a > b) return 1
        else if (a == b) return 0
        else return -1
    })
    return retorno[array.length - 2]
}
const segundoMaior2 = function (array) {
    const retorno = array.sort((a, b) => a - b) //ordenar de forma correta crescente
    return retorno[array.length - 2]
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))
console.log(segundoMaior2([12, 16, 1, 5]))
console.log(segundoMaior2([8, 4, 5, 6]))