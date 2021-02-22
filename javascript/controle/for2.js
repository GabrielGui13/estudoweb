const notas = [5.1, 6.7, 10, 9.8, 7.3]

for (let i in notas) {
    console.log(i, notas[i]) //usa para percorrer a array
}
console.log('Final da primeira repeticao')

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo) //retorna o ultimo atributo de quando saiu do laco, colocar sempre let antes da variavel