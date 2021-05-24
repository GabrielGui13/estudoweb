const fs = require('fs') //previamente instalado no node

const caminho = __dirname + '/arquivo.json' //acessando o arquivo sem o .

//sincrono...

const conteudo = fs.readFileSync(caminho, 'utf-8') //se for arquivo grande demora, passa o encode depois para ler correto, verificar no vscode
console.log(conteudo) //não recomendado pois trava o event loop

//assincrono...

fs.readFile(caminho, 'utf-8', (err, conteudo) => { //passa uma callback para executar quando o arquivo for carregado
    const config = JSON.parse(conteudo) //é uma string
    console.log(`${config.db.host}:${config.db.port}`) //so funciona se config for objeto, Cannot read property 'host' of undefined
}) //em vez de receber, passa uma callback

const config = require('./arquivo.json') //forma mais facil de acessar o json ja instanciado, ja converte em objeto
console.log(config.db) //esse console.log foi executado antes do da linha 12, pois o de lá ainda estava carregando

fs.readdir(__dirname, (err, arquivos) => { //__dirname passa a pasta atual como parametro, global no node
    console.log('Conteudo da pasta...')
    console.log(arquivos) //retorna todos os arquivos da pasta funcionários
})
