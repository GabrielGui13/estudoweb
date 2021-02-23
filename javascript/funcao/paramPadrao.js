// estrategia 1 para gerar valor padrao

function soma1 (a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
} 

console.log(soma1()) //como nao passou valores (false), ele assume o valor padrao 1
console.log(soma1(3)) // a = 3, o resto soma com o valor padrao
console.log(soma1(1, 2 ,3)) //soma normal
console.log(soma1(0, 0, 0)) // 0 retorna falso, entao retorna os valores padrao que passar gera padrao1

console.log(' ')// para dar a quebra de linha

// estrategia 2, 3 e 4 para gerar valor padrao

function soma2 (a, b, c) {
    a = a !== undefined ? a : 1 //caso a condicao seja verdadeira, atribui a, se for falsa, eh 1
    b = 1 in arguments ? b : 1 //dentro de arguments existe o indice 1? se existir pegue o valor b, se nao, sera 1 (o 1 in arguments se refere ao indice)
    c = isNaN(c) ? 1 : c //se c nao eh um numero (is C Not a Number), ele retorna 1, se nao, retorna o valor do c (forma mais segura)

    return a + b + c
}

console.log(soma2())
console.log(soma2(3)) // a = 3, o resto soma com o valor padrao
console.log(soma2(1, 2 ,3)) //soma normal
console.log(soma2(0, 0, 0)) //retorna 0

console.log(' ')

// valor padrao do es2015

function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
} //forma bem mais facil

console.log(soma3())
console.log(soma3(3)) // a = 3, o resto soma com o valor padrao
console.log(soma3(1, 2 ,3)) //soma normal
console.log(soma3(0, 0, 0)) //retorna 0
