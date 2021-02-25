class Pessoa {
    constructor(nome) {
        this.nome = nome 
    }

    falar() {
        console.log(`Meu nome eh ${this.nome}`) 
    }
}
const p1 = new Pessoa('Joao') 
p1.falar()




function criarPessoa (nome) {
    this.nome = nome
    
    this.falar = function () {
        console.log(`Meu nome eh ${nome}`)
    }
}
const p2 = new criarPessoa('Gabriel')
p2.falar()



function createPerson (name) {
    return {
        get: () => console.log(`My name is ${name}`)
    }
}
const person = new createPerson('Guilherme')
person.get()




function criarPessoa2 (nome, idade, genero) {
    this.nome = nome
    this.idade = idade
    this.genero = genero
}

const p3 = new criarPessoa2('Gabriel', 18, 'M')
console.log(p3.nome)
console.log(p3.idade)
console.log(p3.genero) //retorna cada variavel por causa do this
console.log(p3) //bugado n sei pq




function criarPessoa3 (nome, idade, genero) {
    this.nome = nome
    this.idade = idade
    this.genero = genero

    this.getPessoa = function() {
        return {
            nome,
            idade,
            genero
        }
    }
}

const p4 = new criarPessoa3('Gabriel', 18, 'M')
console.log(p4.getPessoa()) //retorna o objeto completo