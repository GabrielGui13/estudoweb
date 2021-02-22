function numeroAleatorio (min, max) {
    var valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 //mesmo que ja seja -1, ele executa o codigo antes de testar a condicao

do {
    opcao = numeroAleatorio(-1, 10)
    console.log(`A opcao escolhida foi ${opcao}`)
} while (opcao != -1) //com o do while, primeiro eh gerado o valor aleatorio e depois testa a condicao
 
console.log('Final')