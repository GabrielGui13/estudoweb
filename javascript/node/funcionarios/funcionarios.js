const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //client http, requisições de algo remoto

const baseObject = {
    id: 100,
    nome: 'Uriel',
    sobrenome: 'Congreve',
    email: 'ucongreve2r@sina.com.cn',
    genero: 'M',
    cidade: 'Salmi',
    pais: 'Russia',
    empresa: 'Devpoint',
    salario: 22895.45
}

const filtrarMulherChina = a => a.genero == 'F' && a.pais == 'China'
const ordenarSalario = (a, b) => a.salario - b.salario

const chinesas = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => func.salario < funcAtual ? func : funcAtual

axios.get(url).then(response => { //requisição em cima da url e obtem o conteudo do arquivo
    const funcionarios = response.data
    //console.log(funcionarios) //mostra cada funcionário, não mostra todos 

    //Desafio!! Encontrar a mulher chinesa como menor salário
    const funcionariosOrdenados = funcionarios.filter(filtrarMulherChina).sort(ordenarSalario) //minha versão
    console.log(funcionariosOrdenados[0])

    const func = funcionarios.filter(mulheres).filter(chinesas).reduce(menorSalario) //versão do professor
    console.log(func)
}) 


