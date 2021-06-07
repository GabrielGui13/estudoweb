function funcionarOuNao (valor, chanceErro) {
    return new Promise ((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        }
        else {
            resolve(valor)
        }
    })
} 

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(`Valor: ${v}`), //erro por ser consol
        err => console.log(`Erro Esp: ${err}`) //primeiro tratamento de erro, se houver algum cai nele primeiro
        )
    .catch(err => console.log(`Erro: ${err}`)) //um erro normal cai no catch da mesma forma, sem tratar
    .then(() => console.log(`Fim!`)) //especie de finally