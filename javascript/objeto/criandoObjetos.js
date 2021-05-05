// usando a notação literal
const obj1 = {}
console.log(obj1)


//Object em JS
console.log(typeof Object, typeof new Object) //function object
const obj2 = new Object
console.log(obj2)


//Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //public
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc) //preco e desc private
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999, 0.5)
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))


//Função Factory
function criarFunc(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFunc('Joao', 7980, 4)
const f2 = criarFunc('Maria', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
