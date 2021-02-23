function Pessoa() {
    this.idade = 0 //quando instanciar a funcao (criar um objeto a partir dela), vai ter o atributo a disposicao para manipular

    const self = this //this eh o objeto da funcao instanciada, eh o objeto que quer apontar la embaixo
    setInterval(function () { //dispara uma outra funcao a partir de determinado intervalo que voce passou (funcao como parametro)
        self.idade++ //o this nao se refere a function pessoa, e sim ao setInterval() (sem o bind)
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //a cada 1000ms essa funcao vai ser disparada novamente

} //ao colocar o bind pra amarrar o this do objeto, ele aponta para pessoa novamente, executa normalmente

//para que tudo funcione, vai instanciar a funcao pessoa

new Pessoa  //instanciou a funcao e chamou ela

//como o self tem um this sempre apontando para a function pessoa, nao eh necessario o bind, ja que ao usar o self, sempre tera um this que apontara para o objeto desejado