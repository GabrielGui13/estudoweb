const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plastico', preco: 18.99, fragil: true}
]

console.log(produtos.filter(function(p){
    //return true //true retorna tudo, e false nada
    return p.preco > 2000 && p.fragil //apenas ipad pro passa
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro)) //apenas o que é caro
console.log(produtos.filter(caro).filter(fragil)) //apenas o que é caro e fragil