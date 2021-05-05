const sequencia = {
    _valor: 1, //convenção, variavel interna apenas (para outros desenvolvedores)
    get valor() { return this._valor++ }, //javascript não tem polimorfismo a nãop ser usando get e set
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    } //forma de encapsulamento
}

console.log(sequencia.valor, sequencia.valor) //puxa o valor do get
sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 900 //ignora pois é menor que o valor atual
console.log(sequencia.valor,sequencia.valor)