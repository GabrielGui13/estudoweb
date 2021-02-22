function numeroAleatorio(min, max) {
    const valorAleatorio = Math.random() * (max - min) + min
    return Math.floor(valorAleatorio)
}

let opcao = 0

while (opcao != -1) {
    opcao = numeroAleatorio(-1, 10)
    console.log(`A opcao escolhida foi ${opcao}`) //ficara repetindo o que esta dentro do escopo ate que a condicao seja false 
}

console.log('Final') //quando a condicao for false, sai do laco e executa no escopo global