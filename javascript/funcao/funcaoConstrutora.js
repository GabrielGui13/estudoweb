function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado, pertence apenas ao escopo da funcao carro
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro //instanciou a funcao
uno.acelerar()
console.log(uno.getVelocidadeAtual()) //retorna 5 pois a velocidade atual era igual a 0, ao chamar a funcao acelerar, adicionou delta = 5 na velocidade atual

const ferrari = new Carro(350, 20) //troca os valores de velocidade maxima e delta pra ferrari
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) //da 60 pois acelerou 3 vezes

console.log(ferrari)