// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => { 
                resultado += dados
            })
    
            res.on('end', () => { 
                try {
                    resolve(JSON.parse(resultado))
                }
                catch(e) {
                    reject(e)
                }
            })
        })
    })
} 

// Recurso do ES8
// Simplificar o uso de promises...

let obterAlunos = async () => { //marcou a função com o async, a palavra await so vai funcionar em uma função marcada com await
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return[].concat(ta, tb, tc)
} //retorna um objeto AsyncFunction

obterAlunos().then(aluno => aluno.map(aluno => aluno.nome)).then(alunos => console.log(alunos))