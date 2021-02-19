//hoisting e o icamento da variavel para cima, evitar essa estrategia pois confunde

console.log('a =', a) //undefined, pois ele ja sabe q ela existe mas ta indefinida
var a = 2
console.log('a =', a) //2, pois foi definida

/*
var a
console.log('a =', a)
a = 2
console.log('a =', a)

O programa acima seria o mesmo que esse
*/

function teste () {
    console.log('a f =', a)
    var a = 2
    console.log('a f =', a)
}

teste() //dentro da funcao o resultado e o mesmo

//console.log('b =', b) daria um erro, pois o let nao tem hoisting
let b = 3 

