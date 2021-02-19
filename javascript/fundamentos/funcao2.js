// Armazenando funcao em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
} // => substitui o function

console.log(soma(2, 3))

//retorno implicito

const subtracao = (a, b) => a - b //funcao de uma unica linha, nao necessario um corpo {} nem return
console.log(subtracao(2, 3)) //retorna -1

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')
