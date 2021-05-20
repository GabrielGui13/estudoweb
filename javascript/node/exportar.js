console.log(module.exports) //objeto vazio, se quiser usar esse objeto ja criado, usar this, exports ou module.exports
//mas se quiser criar um novo objeto, não adianta usar this ou exports, sempre usar module.exports
// this e exports são referências para o objeto que module.exports aponta
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 //visivel fora
exports.b = 2 //visivel fora
module.exports.c = 3 //visivel fora

exports = null
console.log(module.exports) //mesmo atribuindo nulo, aponta pra oq setou em cima, pois é outra variável

exports = {
    nome: 'Teste'
} //mudou a referencia de exports

console.log(module.exports) //continua sendo o mesmo objeto mesmo que tenha mudado a referência duas vezes

module.exports = {
    publico: true
} //forma correta de exportar objeto, sempre que precisara atribuir um niovo objeto para ser exportado, usar module.exports

