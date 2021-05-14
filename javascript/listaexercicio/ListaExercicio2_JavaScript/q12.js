const removerPropriedade = function (obj, prop) {
    const copia = Object.assign({}, obj)
    delete copia[prop]
    return copia
}

const obj = {a: 1, b: 2, c: 3}
console.log(removerPropriedade(obj, "a"))
console.log(obj)