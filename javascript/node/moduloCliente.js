const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo) //module.exports = exports = this
console.log(moduloA) //imprime um objeto

console.log(moduloB.bomDia) //se for this ou exports da erro, precisa ser module.exports = {}
console.log(moduloB.boaNoite())
console.log(moduloB) //imprime o objeto, o que você exporta pra fora do módulo é o que estará visível