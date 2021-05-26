const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) //para qualquer req (sem url especifica) feita no servidor usando express, obrigatoriamente, passa por esse middleware enviados por (url encoded)

//traz todos os produtos cadastrados
app.get('/produtos', (req, res, next ) => { //forma de requisição, como get e post => get(root, res(middleware))
    res.send(bancoDeDados.getProdutos()) //Converter para JSON pelo send()
})

//get, obter alguma informcao do servidor, produtos/id(1 ou 2) para retorna o produto com esse id, traz produto especifico
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) //requisicao do req feita diretamente na url
})

//mapeado na mesma url, post passa tudo na requisicao
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({ //passa o produto (obj) de parametro
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //possivel pois a funcao adiciona o produto e o retorna no final => JSON
})

//todo rs no server reseta o objeto simulando database

//funcao que vai servir no put para sobrescrever arquivo com certo id
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({ //passa o produto (obj) de parametro
        id: req.params.id, //id vem direto na url
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //possivel pois a funcao adiciona o produto e o retorna no final => JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id) //deleta o produto
    res.send(produto) 
})

app.listen(porta, () => { //serve como a ignição do servidor, porta que vai ficar escutando
    console.log(`Servidor está executando na porta ${porta}`)
})
