// Closure eh o escopo criado quando uma funcao eh declarada
// Esse escopo permite a funcao acessar e manipular variaveis externas a funcao, tem tudo a ver com o contexto lexico

// Contexto lexico em acao

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora() //funcao fora retorna outra funcao que retorna o valor de x
console.log(minhaFuncao()) //retorna local pois eh onde estava o escopo que a variavel fisica mais proxima foi declarada, ela tem memoria