const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray) //ainda é um objeto
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) }, //usa o this pra referenciar o objeto
    enumerable: false //Não sera visivel nos values
})

console.log(quaseArray[0]) //acessado da mesma forma, pelas chaves também

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray) //impressos de forma identica
