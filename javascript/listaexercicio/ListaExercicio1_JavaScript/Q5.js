function soma (x, y) {
    let somar = x + y
    let retorno = 'R$'
    retorno += somar.toFixed(2).toString()
    retorno2 = retorno.split('.')
    
    return retorno2[0] + ',' + retorno2[1]
}

console.log(soma(80, 21.7))