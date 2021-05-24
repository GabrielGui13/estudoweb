console.log(this === global) //false, this aponta para module.exports
console.log(this === module) //false, this é um objeto, referencia de module.exports
console.log(this === module.exports) //true, this aponta para module.exports
console.log(this === exports) //true, os dois tem a mesma referência

let oi = 'oi'

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) //false, dentro da função o this não aponta para exports, e sim para o global
    console.log(this === module.exports) //false, exports deu falso e os dois apontariam para a mesma referencia
    console.log(this === global) //true

    this.perigo = '...' //colocando isso dentro do escopo global, no fora retornaria no module.exports
    oi = 1 //da preferencia ao 1
    this.oi = 2 //ja existe a variavel no escopo global
}
logThis()

console.log(perigo)
console.log(oi)
