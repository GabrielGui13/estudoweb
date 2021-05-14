const retornarPares = function(array) {
    return array.filter((a, i) => a % 2 == 0 && i % 2 == 0)
}

console.log(retornarPares([1, 2, 3, 4]))
console.log(retornarPares([10, 70, 22, 43]))