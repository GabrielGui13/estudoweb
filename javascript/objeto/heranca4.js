function meuObjeto() {}

console.log(meuObjeto.prototype) //{}

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__) //duas instancias da mesma função, da true pois apontam ao mesmo prototipo
console.log(meuObjeto.prototype === obj1.__proto__) //também é true, sempre aponta para função.prototype e não Object.prototype

meuObjeto.prototype.nome = 'Anonimo' //qualquer objeto criado dessa função tera anonimo
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar() //Nome Anônimo
obj2.nome = 'Rafael'
obj2.falar() //Nome Rafael

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo a loucura...

console.log((new meuObjeto).__proto__ === meuObjeto.prototype) //true
console.log(meuObjeto.__proto__ === Function.prototype) //true
console.log(Function.prototype.__proto__ === Object.prototype) //true 
console.log(Object.prototype.__proto__) //null
