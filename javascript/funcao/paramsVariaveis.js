function soma() {
    let soma = 0
    for (i in arguments /*array*/ ) {
        soma += arguments[i] //soma os parametros que forem adicionados na funcao
    }
    return soma
}
//forma de usar funcoes sem parametros definidos

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste')) //soma os dois primeiros e concatena
console.log(soma('a', 'b', 'c')) //concatena todos, e retorna 0abc, pois o let ja tem 0, entao concatena