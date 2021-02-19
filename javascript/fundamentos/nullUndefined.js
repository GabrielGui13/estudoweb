let valor //nao inicializada (undefined), valor por padrao
console.log(valor)

// console.log(valor2) => valor2 is not defined, pois nao foi nem declarado

valor = null //nao tem nenhum valor e nao tem nenhum endereco que aponta para um local de memoria com valor, ausencia de valor
console.log(valor) //nao eh interessante voce mesmo atribuir o undefined

//console.log(valor.toString()) => nao leria pois eh nulo, type error

const produto = {}
console.log(produto.preco) //undefined, pois nao foi definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) //false
console.log(produto) // {preco: undefined}, a forma correta de retirar o valor seria com delete produto.preco e retornaria {}

produto.preco = null //sem preco
console.log(!!produto.preco) //false
console.log(produto) // {preco: null}, se ela estiver nula voce nao pode acessar nada