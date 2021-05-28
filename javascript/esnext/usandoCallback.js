// sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => { //on data, acessando os dados da url
            resultado += dados
        })

        res.on('end', () => { //terminou de chegar os dados
            callback(JSON.parse(resultado)) //convertendo o JSON da pagina em objeto
        })
    })
} 

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `c: ${c.nome}`))
            console.log(nomes)
        })
    })
})