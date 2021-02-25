function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` //this esta acessando o global
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) //NaN, this no global nao esta definido
global.preco = 20
global.desc = 0.1
console.log(getPreco()) //apos definir da certo
console.log(produto.getPreco()) //fez o calculo certo (primeira forma de executar)


const carro = { 
    preco: 49990, 
    desc: 0.20
}

console.log(getPreco.call(carro)) //chamou a funcao e inseriu o objeto nela (segunda forma de executar)
console.log(getPreco.apply(carro)) //terceira forma de executar

console.log(getPreco.call(carro, 0.17, '$')) //primeiro passa o objeto, depois os parametros que quer passar pra funcao
console.log(getPreco.apply(global, [0.17, '$'])) //necessario criar uma array, passou o global.preco e global.desc
