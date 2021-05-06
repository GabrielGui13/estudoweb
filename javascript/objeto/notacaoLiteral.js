const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c} //duplicidade não necessária
const obj2 = { a, b, c} //nome da constante é o nome do atributo, para mudar colcoa a notação de cima

console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr //troca pelos valores
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() { //tradicional
        // ...
    },
    funcao2() { //nova forma de declarar função
        // ...
    }
}
console.log(obj5)
