
function pontuacao (pontos) {
    let stringPontos = pontos.split(' ')

    let contadorMaior = 0
    let indiceMenor = 1
    let menor = stringPontos[0]
    let maior = stringPontos[0]

    for (let i = 1; i < stringPontos.length; i++) {
        if (stringPontos[i] > maior) {
            maior = stringPontos[i]
            contadorMaior++
        } 
        else if (stringPontos[i] < menor) {
            menor = stringPontos[i]
            indiceMenor = i + 1
        }
    }
    
    return `[${contadorMaior}, ${indiceMenor}]`
}

console.log(pontuacao('10 20 20 8 25 3 0 30 1'))