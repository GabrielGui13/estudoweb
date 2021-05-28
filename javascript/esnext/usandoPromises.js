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

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    //.then(x => console.log(x)) //uma array, com o array de cada turma, uma array de tres arrays com todos os alunos
    .then(turmas => [].concat(...turmas)) //um único array com todos os alunos
    .then(alunos => alunos.map(aluno => aluno.nome)) //faz um map só com os nomes
    .then(nomes => console.log(nomes)) //

getTurma('D').catch(e => console.log(e.message))