const somarNumeros = function(array) {
    return array.reduce((s, e) => s + e)
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))