// let e const
{
    var a = 2
    let b = 3
    console.log(b) //aqui da certo
}

console.log(a) //funciona pois var so tem escopo global e de funcao
//console.log(b) //mensagem de erro pois let tem escopo de bloco


//Template String
const produto = 'iPad'
console.log(`${produto}
eh /
caro`) //interpola variaveis, reconhece quebra de linha


//Destructuring
const [l, e, ...tras] = "Cod3r" //forma de criar varias variaveis, ...tras cria uma array com o que eh passado
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] //elemento do meio ignorado por um espaco vazio
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9} //nao importa a ordem, pega pelo nome, pode colocar a variavel como outro nome
console.log(nome, i)
