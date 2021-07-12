function novoElemento(tagName, className) { //funcao para facilitar e criar um elemento passando o nome e a classe
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) { //funcao pra criar uma abrreira completa
    this.elemento = novoElemento('div', 'barreira') //cria o elemento que vai servir como os canos, tem o this para ser acessado de fora

    const borda = novoElemento('div', 'borda') //cria a parte mais comprida, ponta do cano
    const corpo = novoElemento('div', 'corpo') //cria a parte longa, corpo do cano
    this.elemento.appendChild(reversa ? corpo : borda) //insere no elemento principal
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px` //funcao publica para definir a altura
}

// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) { //a altura eh a altura do jogo
    this.elemento = novoElemento('div', 'par-de-barreiras') //cria o par de barreiras que vai ter a abertura no meio

    this.superior = new Barreira(true) //cria as barreiras de cima
    this.inferior = new Barreira(false) //cria as barreiras de baixo

    this.elemento.appendChild(this.superior.elemento) //insere a barreira de cima no elemento total
    this.elemento.appendChild(this.inferior.elemento) //insere a barreira de baixo no elemento total

    this.sortearAbertura = () => { //vai sortear as diferentes alturas das barreiras
        const alturaSuperior = Math.random() * (altura - abertura) //subtrai a altura do jogo menos a abertura, e cria um valor aleatorio disso
        const alturaInferior = altura - abertura - alturaSuperior //utiliza o mesmo calculo anterior, mas tira a altura do outro elemento, para manter a abertura
        this.superior.setAltura(alturaSuperior) //seta a altura dos elementos
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) //pega a coordenada no eixo horizontal do par de barreiras
    this.setX = x => this.elemento.style.left = `${x}px` //funcao para alterar o eixo x do elemento, vai ser usado para animar
    this.getLargura = () => this.elemento.clientWidth //pega a largura do elemento

    this.sortearAbertura()
    this.setX(x)
}

// const b = new ParDeBarreiras(700, 200, 800)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) { //altura do jogo, largura do jogo, abertura entre as barreiras (vertical), espaco entre as barreiras (horizontal), e funcao para da ponto
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura), //comeca exatamente depois da largura do jogo (largura == x)
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3) //cria cada barreira com espacos diferentes uma da outra
    ]

    const deslocamento = 3 //de quantos em quantos px eh animado
    this.animar = () => {
        this.pares.forEach(par => { //para cada par
            par.setX(par.getX() - deslocamento) //utiliza o x atual, e vai diminuindo o deslocamento

            // quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) { //x eh 0 na quina do jogo, se ele menor que a largura da barreira
                par.setX(par.getX() + espaco * this.pares.length) //ele muda o espaco do jogo, e coloca antes de aparecer do lado direito
                par.sortearAbertura() //sorteia sua abertura novamente, para ser uma barreira diferente
            }

            const meio = largura / 2 //meio eh a metade da largura do jogo
            const cruzouOMeio = par.getX() + deslocamento >= meio //se o x da barreira mais o deslocamento for maior ou igual o meio do jogo
                && par.getX() < meio // e o x sem o deslocamento for menor que o meio, significa que cruzou o meio
            if(cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) { //altura do jogo para nao voar infinitamente
    let voando = false //pra iniciar o jogo, quando pressionar tecla voa ou cai

    this.elemento = novoElemento('img', 'passaro') //elemento tipo image com classe passaro
    this.elemento.src = 'imgs/passaro.png' //adiciona atributo ao elemento

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]) //posicao que o passaro ta voando
    this.setY = y => this.elemento.style.bottom = `${y}px` //mudar a posicao do passaro no eixo y

    window.onkeydown = e => voando = true //quando clicar qualquer tecla, voando eh true
    window.onkeyup = e => voando = false //quando clicar qualquer tecla, voando eh false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5) //se tiver voando sobe 8, se cair desce 5
        const alturaMaxima = alturaJogo - this.elemento.clientHeight //altura maxima que o passaro pode voar, altura do jogo menos a do passaro

        if (novoY <= 0) { 
            this.setY(0) //se o novoY esta descendo pra baixo do chao, eh sempre 0
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima) //se chegar no maximo, nao consegue ir mais
        } else {
            this.setY(novoY) //caso nao viole nenhum extremo, desloca-se normalmente
        }
    }

    this.setY(alturaJogo / 2) //define que o passaro inicia no meio do jogo
}



function Progresso() {
    this.elemento = novoElemento('span', 'progresso') //cria o span dos pontos
    this.atualizarPontos = pontos => { //passa por parametro os pontos para atualizar os pontos
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0) //inicialmente eh 0
}

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.elemento)
// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect() //retorna as dimensoes do quadrado
    const b = elementoB.getBoundingClientRect() //retangulo associado ao elemento

    const horizontal = a.left + a.width >= b.left //checa se a distancia do lado esquerdo + a largura de um elemento eh maior que a distancia do lado esquerdo do outro elemento
        && b.left + b.width >= a.left //faz o mesmo para os dois elementos
    const vertical = a.top + a.height >= b.top //checa se a distancia de cima do elemento + sua altura eh maior que a distancia de cima do outro elemento
        && b.top + b.height >= a.top //faz o mesmo para o outro elemento
    return horizontal && vertical //retorna os valores, se algum for true, significa se houve colisao
}

function colidiu(passaro, barreiras) {
    let colidiu = false //inicialmente eh false pois nao tem colisao
    barreiras.pares.forEach(parDeBarreiras => { //para cada barreira checa a colisao
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento //seleciona a barreira de cima
            const inferior = parDeBarreiras.inferior.elemento //seleciona a barreira de baixo
            colidiu = estaoSobrepostos(passaro.elemento, superior) //checa se o passaro toca o elemento de cima
                || estaoSobrepostos(passaro.elemento, inferior) //ou se toca o elemento de baixo
        }
    })
    return colidiu //retorna o colidiu

}

function FlappyBird() {
    let pontos = 0 //pontos iniciais

    const areaDoJogo = document.querySelector('[wm-flappy]') //seleciona a area do jogo
    const altura = areaDoJogo.clientHeight //pega a altura do jogo
    const largura = areaDoJogo.clientWidth //pega a largura do jogo

    const progresso = new Progresso() //cria um progresso (pontos)
    const barreiras = new Barreiras(altura, largura, 200, 400, //abertura de 200, e o espaco entre de 400
        () => progresso.atualizarPontos(++pontos)) //funcao callback para incrementar a variavel dos pontos
    const passaro = new Passaro(altura) //cria o passaro

    areaDoJogo.appendChild(progresso.elemento) //adiciona os pontos
    areaDoJogo.appendChild(passaro.elemento) //adiciona os passaros
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento)) //adiciona os pares de barreiras

    this.start = () => { //inicia o jogo
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar() //anima as barreiras
            passaro.animar() //anima o passaro

            if (colidiu(passaro, barreiras)) { //se houver colisao ele da clearInterval e para o temporizador
                clearInterval(temporizador) //para o jogo
            }
        }, 20)
    }
}

new FlappyBird().start()