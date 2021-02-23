const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //acessando o atributo do objeto dono da funcao, sem ele daria erro (not defined)
    }
}

pessoa.falar()

const falar = pessoa.falar //armazenou a function falar dentro da variavel
falar() //conflito entre paradigmas: funcional e OO, saudacao esta apontando para um this difernet que nao e mais o objeto pessoa, e sim a const falar

const falarDePessoa = pessoa.falar.bind(pessoa) //passa um objeto que voce quer q seja resolvido o this
falarDePessoa() //executa normal, pois ele amarrou o objeto pra que ele seja o dono da execucao do emtodo, sempre que chamar a funcao, o this sera o objeto da bind

const falar2 = pessoa.falar
falar2() //a funcao pessoa.falar nao foi alterada pelo bind(), o resultado dela que foi armazenado na variavel eh que tem a amarracao com o objeto pessoa