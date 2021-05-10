Array.prototype.filter2 = function(func, thisArg) {
    const array = []
    for (let i = 0; i < this.length; i++) {
        if (func.call(thisArg, this[i], i, this)) {
            array.push(this[i])
            
        }
    }   
    return array
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plastico', preco: 18.99, fragil: true}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

const arrayTeste = produtos.filter2(caro).filter2(fragil)
const arrayTeste2 = produtos.filter2(caro, produtos)
console.log(produtos.filter2(caro).filter2(fragil)) //apenas o que é caro e fragil
console.log(arrayTeste)
console.log(arrayTeste2)