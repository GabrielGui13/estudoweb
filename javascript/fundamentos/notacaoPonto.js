console.log(Math.ceil(6.1)) //arredonda pra cima

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' => sobrescreveu o atributo que ja existia

console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome //torna o nome publico, uma var ficaria dentro do escopo da funcao
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')

console.log(obj2.nome) //retorna cadeira pois instanciou a funcao dentro da const obj2
console.log(obj3.nome) //retorna mesa pois instanciou a funcao dentro da const obj3
obj3.exec() //a partir do this pode criar atributos ou funcoes que serao expostas para fora do escopo da funcao quando for instanciada (new)
