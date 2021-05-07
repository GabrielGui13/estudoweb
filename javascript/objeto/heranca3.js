const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai) //definiu o prototipo que é pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(filha2.nome)
filha2.nome = 'Carla' //não altera pois writable é false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //caso não tivesse definido na linha 7 não apareceria nada
console.log(Object.keys(filha2)) //caso enumerable fosse false não apareceria

for (let key in filha2) {
    //console.log(key) //nome e cor do cabelo
    filha2.hasOwnProperty(key) ? console.log(key) : console.log('Por herança: ' + key) //checa se o atributo é dela ou veio por herança
}