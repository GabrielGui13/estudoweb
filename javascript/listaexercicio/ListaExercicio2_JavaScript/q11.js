const receberPrimeiroEUltimoElemento = function(array) {
    const retorno = [] 
    retorno.push(array[0])
    retorno.push(array[array.length - 1])

    return retorno
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))