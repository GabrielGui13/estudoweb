function Sim (nome, idade, sexo) {
    this.nome = nome 
    this.idade = idade 
    this.sexo = sexo 
}

const pessoa = new Sim('Gabriel', 18, 'M') // criou um objeto

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.sexo)