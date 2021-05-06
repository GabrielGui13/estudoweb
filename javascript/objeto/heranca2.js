// Cadeia de protótipos

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr0) //undefined
console.log(filho.attr1) //o filho não tem, o pai não tem, mas o avô tem, então retorna A
console.log(filho.attr2) //o filho nao tem, o pai tem, entao retorna B
console.log(filho.attr3) //o filho tem, entao retorna C

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta 
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing, vai sobreescrever o valor (especie de polimorfismo)
}

const volvo = {
    __proto__: carro, //definiu o objeto pai
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super chama a funcao do prototipo
    }
}

Object.setPrototypeOf(ferrari, carro) //criar prototipagem, ferrari herda carro

console.log(ferrari) //mostra os atributos do ferrari, e nao do pai
console.log(ferrari.__proto__) //imprime o objeto carro

volvo.acelerarMais(100)
console.log(volvo.status()) //imprime a funcao status + a do prototipo devido o super

ferrari.acelerarMais(300)
console.log(ferrari.status()) //imprime o status do objeto carro mas troca a velocidade maxima pois o this de carro aponta pra ferrari ja que ele chama