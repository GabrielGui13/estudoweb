const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os precos

const precos = carrinho.map(function(valor, index) {
    let pos1 = valor.search('preco')
    let pos2 = valor.search('}')
    return valor.substring(pos1 + 8, pos2)
})

const paraObjeto = json => JSON.parse(json) //transformou cada elemento em um objeto
const apenasPreco = produto => produto.preco  //pegou o .preco do objeto transformado
const precos2 = carrinho.map(paraObjeto).map(apenasPreco)

console.log(precos)
console.log(precos2)