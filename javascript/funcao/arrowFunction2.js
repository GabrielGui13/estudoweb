function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ 
        console.log(this.idade) //o this nao vai variar nesse contexto lexico, pois ele aponta para a funcao pessoa
    }, 1000)
}

new Pessoa