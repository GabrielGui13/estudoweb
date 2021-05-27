//ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) //apenas valores
console.log(Object.entries(obj)) //array de arrays com chave e valor


//Melhorias na notacao literal
const nome = 'Carla'
const pessoa = {
    nome, //nao necessita o valor e :, se a variavel existe pode ser chave e valor diretamente
    ola() { //nao necessita o :, pode chamar a funcao diretamente
        return 'Oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())


//Class
class Animal {} //sao objetos
class Cachorro extends Animal { //forma de heranca
    falar() {
        return 'Au au'
    }
}

console.log(new Cachorro().falar())