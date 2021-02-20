// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 17,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa //nao e objeto, serve pra retirar do objeto
console.log(nome, idade)

const {nome: n, idade:i} = pessoa // atribuiu os objetos a uma variavel
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //true atribuida a bemHumorada para retornar caso nao tenha nada
console.log(sobrenome, bemHumorada) 

const {endereco: {logradouro, numero, cep}} = pessoa //so endereco retornaria o objeto completo
console.log(logradouro, numero, cep) //caso fosse pra retornar o endereco voltaria o objeto

//const {conta: {ag, num}} = pessoa => daria erro pois nao