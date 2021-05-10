Array.prototype.map2 = function(func) {
    let array = []
    for (let i = 0; i < this.length; i++) {
        array.push(func(this[i], i, this))
    }
    return array
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json) //transformou cada elemento em um objeto
const apenasPreco = produto => produto.preco  //pegou o .preco do objeto transformado
const precos2 = carrinho.map(paraObjeto).map(apenasPreco)
const precos3 = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(precos2)
console.log(precos3)