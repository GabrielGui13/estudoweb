const multiplicar = function (n1, n2) {
    if (n1 < 0 || n2 < 0) {
        return 'Numero invalido'
    }

    let total = 0

    for (let i = 1; i <= n1; i++) {
        total += n2
    }
    return total
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))