const fs = require('fs')
const path = require('path')

//Minha versão
function lerDados() {
    return new Promise((resolve, reject) => {
        const caminho = __dirname + '/dados.txt'

        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            resolve(conteudo)
            reject(err)
        })
    })
}

lerDados()
    .then(textoMaior => textoMaior.toUpperCase())
    .then(console.log)


//Versão do professor
const caminho = path.join(__dirname + '/dados.txt')

function lerArquivo(caminho) {
    return new Promise(resolve => {

        fs.readFile(caminho, (err, conteudo) => {
            resolve(conteudo.toString()) //sem o toString daria erro
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n')) //cria uma array na quebra de linha, '\r\n' pois é windows
    .then(linhas => linhas.join(',')) //une os elementos do array em um string, necessita de um replace
    .then(conteudo => `O valor final é: ${conteudo}`) //cria um template string
    .then(console.log)