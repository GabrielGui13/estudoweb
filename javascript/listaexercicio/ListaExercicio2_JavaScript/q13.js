const filtrarNumeros = function (array) {
    const retorno = array
    return array.filter(function(a){
        return !isNaN(a)
    })
}

console.log(filtrarNumeros(["Javascript", 1, 2, "oi", 3]))
console.log(filtrarNumeros(['a', 'b']))