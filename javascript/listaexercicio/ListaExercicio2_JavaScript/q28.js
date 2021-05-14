const filtrarQuantidadeDeDigitos = function(array, digitos) {
    const retorno = array.filter(e => {
        return e.toString().length == digitos
    })
    return retorno
}

console.log(filtrarQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))