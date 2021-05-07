// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha' //vai alterar o dado
produto.descricao = "Borracha escolar branca" //não adiciona o atributo
delete produto.tag //apagou o atributo tag
console.log(produto)


// Object.seal

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //nao conseguiu adicionar atributo
delete pessoa.nome //não conseguiu excluir atributo
pessoa.idade = 29 //modificou a idade
console.log(pessoa)

//Object.freeze = selado + valores constantes => Object.seal + writable: false
