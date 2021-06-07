function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            // /console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

/* esperarPor(2000)
    .then(esperarPor)
    .then(esperarPor) //executa normal uma vez a cada 2s */

async function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarRapido () {
    return 20 //retorna promise sem tempo
}

async function executar() {
    //let valor = await retornarValor() //sem o await, o valor fica [object Promise], pois o console.log eh executado sem aguardar o valor retornar
    let valor = await retornarRapido() //mesmo sem setTimeout, deve ter um await pois retorna uum promise coma funcao async, duura apenas 1.5s

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`) //sem o await, imprime os 3 console.log, e o codigo eh encerrado depois de 1.5s

    await esperarPor(1500) //com o await, ele so vai para a proxima linha apos a execuucao dessa linha acabar
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)  
    console.log(`Async/Await ${valor + 2}...`) //com o await em cima, o let valor, espera receber o numero 10 antes de continuar pra linha de baixo

    return valor + 3
}

//const v = executar()   recebe uma promise pendente
//console.log(v)   imprime uuma promise pendente, pois async await retorna um promise
executar().then(console.log) //para que o return seja impresso deve ser tratado assim, esperando todos os awaits

