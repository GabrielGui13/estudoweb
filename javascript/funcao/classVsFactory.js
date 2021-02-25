class Pessoa {
    constructor(nome) {
        this.nome = nome //coloca a variavel fora do escopo para que falar() possa acessa-la (variavel publica), sem o this a variavel fica undefined
        console.log(nome) //imprime sem precisar do this
    }

    falar() {
        console.log(`Meu nome eh ${this.nome}`) //coloca this para chamar a variavel de fora, sem ele => nome is not defined
    }
}
const p1 = new Pessoa('Joao') //tem acesso a variavel nome a partir da instancia da classe
p1.falar() //retorna undefined no browser, pois de acordo com a chamada da funcao, o this pode variar de valor



const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome eh ${nome}`)
    }
}
const p2 = criarPessoa('Joao')
p2.falar() // no browser retorna normal pois o objeto do return tem consciencia do contexto lexico, sempre aponta pra variave certa pois nao them this