function gerarNumerosEntre (min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max] //invertendo valores com destructuring
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min 
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido!')
        } else {
            resolve(aleatorio)
        }
    }) 
}

async function gerarMegaSena (qtd, tentativa = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtd).fill()) { //.fill preenche a array do tamanho indicado com undefined 
            numeros.push(await gerarNumerosEntre(1, 60, numeros)) //insere no array os numeros, se for repetido o catch eh chamado e interrompe
        }
    return numeros //resolve a promise retornando o valor (promessa)
    } 
    catch(e) {
        if (tentativa > 10) { //se ficar muito dificil mais de 10 vezxes lanca a excecao
            throw "Nao deu certo" //rejeita a promise lancando uma excecao
        }
        else return gerarMegaSena(qtd, tentativa + 1) //forma recursiva enquanto as tentativas estao poucas
    }
}

gerarMegaSena(15) //trata como uma promise, return eh o resolve, excecao eh o reject
    .then(console.log)
    .catch(console.log)