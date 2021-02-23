const soma = function (x, y) { //funcao anonima = funcao sem nome
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { //terceiro parametro tem como padrao a soma
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma) //muda nada 
imprimirResultado(3, 4, function(x, y) {
    return x - y
}) //  passou outra funcao como parametro diretamente para outra funcao para ser atribuido a operacao
imprimirResultado(3, 4, (x, y) => x * y) //passou uma arrow function (sempre anonima)

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()

const pessoa1 = {
    falar() { //sintaxe tambem valida
        console.log('Opa')
    }
}

pessoa1.falar()