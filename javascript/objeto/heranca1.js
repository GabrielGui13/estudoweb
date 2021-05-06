const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) //undefined
console.log(ferrari.__proto__) // {}
console.log(ferrari.__proto__ === Object.prototype) //true
console.log(volvo.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) //null, não existe

function meuObjeto() {}
console.log(Object.prototype, meuObjeto.prototype) // {} {}
