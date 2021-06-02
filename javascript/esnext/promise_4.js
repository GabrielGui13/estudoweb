function gerarNumerosEntre (min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max] //invertendo valores com destructuring
    }
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min 
            resolve(aleatorio)
        }, tempo)
    }) 
}

function gerarVariosNumeros() {
    return Promise.all([ //vai demorar 4 segundos pois é o tempo da promise maior resolver
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ]) //só retorna quando todas as promises forem resolvidas, assincrono
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log) //imprime um aray com os números
    .then(() => console.timeEnd('promise')) //tempo de execução do console.log