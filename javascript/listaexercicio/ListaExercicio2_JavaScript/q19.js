const calcularMedia = function (array) {
    return array.reduce((a, i) => a + i) / array.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))