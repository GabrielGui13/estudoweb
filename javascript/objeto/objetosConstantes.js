// pessoa -> 123 -> {...} endereço de memória
const pessoa = {
    nome: 'Joao'
}
pessoa.nome = 'Pedro' 
console.log(pessoa)

// pessoa <- 456 <- {...} Aponta pra outro endereço de memória 
//pessoa = { nome: 'Ana' } //criou outro objeto em outro endereço

Object.freeze(pessoa) //Não consegue mais mexer no objeto, transforma em constante
pessoa.nome = 'Maria' //Não gera erro mas ignora a tribuição
pessoa.end = 'Rua ABC' //Não funciona novo atributo
delete pessoa.nome //Também não funciona

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({
    nome: 'Joao' //cria um objeto constante
})
console.log(pessoaConstante)
pessoaConstante.nome = 'Mario'
console.log(pessoaConstante.nome) //não muda
