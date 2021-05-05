const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //[ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) //[ 'Rebeca', 2, 13 ]

console.log(Object.entries(pessoa)) //[ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ] Array

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});
Object.entries(pessoa).forEach(([chave, valor]) => { //destructuring
    console.log(`${chave}: ${valor}`) //imprime a mesma coisa
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //visivel ou não  
    writable: false, //editavel ou não
    value: '13/08/2015'
})
pessoa.dataNascimento = '04/05/2019' //não funciona pois writable é false
console.log(pessoa)

//Object.assign

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } //sobreescreve o atributo existente

const obj = Object.assign(dest, o1, o2) //(target, obj1, obj2, ...) junta os atributos em um unico objeto
Object.freeze(obj)
obj.c = 1234 //não funciona devido o freeze
console.log(obj)