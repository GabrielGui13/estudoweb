let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //true, o this aponta para o objeto global, no browser para o window (o this nao eh o this)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //o this agora aponta para esse objeto e nao para o escopo global
comparaComThis(global) //false
comparaComThis(obj) //true

let comparaComThisArrow = param => console.log(this === param) //nao aponta pro global, dentro do arrow ele varia, o this aponta pro obj
comparaComThisArrow(global) //nao eh o global na arrow function
comparaComThisArrow(module.exports) //ele mesmo

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false, pois a arrow function eh mais forte e nao vai mudar
comparaComThisArrow(module.exports) //true, continua apontando pro objeto que ele foi originalmente escrito

// o this de uma funcao arrow eh um this associado ao contexto que a funcao foi escrita