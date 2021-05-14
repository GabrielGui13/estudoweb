const menorNumero = function (array) {
    let menor = array[0]
    array.forEach(e => {if (e < menor) menor = e});
    return menor
}
const menorNumero2 = function(array) {
    return Math.min(...array)
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero2([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))
console.log(menorNumero2([5, -15, 50, 3]))