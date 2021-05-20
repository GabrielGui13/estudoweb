const moduloA = require('../../moduloA') //respeitando as letras maiusculas e minusculas (melhor forma)
const moduloA1 = require('C:/Users/gabri/Documents/github/estudoweb/javascript/node/moduloA.js') //não muito legal

try {
    const inex = require('../../moduloAB') //da erro pois não existe, ou não saiu na quantidade de pastas certas
    console.log(inex)
}
catch (e) {
    console.log('Erro:' + e)
}

console.log(moduloA.ola)
console.log(moduloA1.ola)

const saudacao = require('saudacao') //procura a pasta com esse nome dentro do node_modules, e vai no index.js, sem precisar de caminho relativo
//caso coloque index2.js daria erro pois procura exatamente index2.js
console.log(saudacao.ola)

const C = require('./pastaC') //não precisa colocar o nome pois automaticamente ja procura o index
console.log(C.ola2)

const http = require('http') //modulos pré instalados do node
http.createServer((req, res) => { //requisição e resposta
    res.write('Bom dia')
    res.end()
}).listen(8080) //o código fica rodando, e cria um servidor local, abre no browser por localhost:8080, fica sempre executando