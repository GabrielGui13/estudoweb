const sequence = {
    __id: 1,
    get id() { return this.__id++ }
}

const produtos = {} //simulacao de database de produtos

function salvarProduto(produto) { //funcao para inserir produto
    if (!produto.id) produto.id = sequence.id //checa se o id do produto ja esta setado e coloca
    produtos[produto.id] = produto //insere o produto por parametro na "database", id esta dentro do produto
    return produto //retorna o produto com id
}

function getProduto(id) {
    return produtos[id] || {} //pegar o produto pelo id, caso nao encontre retorna um objeto vazio
}

function getProdutos() {
    return Object.values(produtos) //retorna os produtos (values)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto} //sequence e produtos nao estao visiveis