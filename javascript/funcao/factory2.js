function criarProduto (nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.5
    }
}

console.log(criarProduto('Leite', 5))


// Versao do professor

function criarProduto2 (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto2 ('Notebook', 2199,99))
console.log(criarProduto2 ('iPad', 1499,99))
