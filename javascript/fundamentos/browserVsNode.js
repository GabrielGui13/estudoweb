let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c) //mesma coisa que o this, exporta o modulo pra fora do arquivo
console.log(module.exports === this) //true, pois eles sao iguais

/* tudo eh diferente do browser, que tem o window, na web todos os arquivos sao unificados 
e estao disputando no escopo global, no node eh tudo modulo */

console.log(module.exports) //retorna os valores do this, pois eles sao iguais

// module.exports { f: 456, g: false, h: 'Teste' } => o this eh a mesma coisa que isso

//criando uma variavel maluca, sem var e let, esta colocando uma variavel diretamente no objeto global do node
abc = 3 //nao faca isso em casa!!!
console.log(global.abc) //retorna 3