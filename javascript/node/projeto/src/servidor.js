const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => { //forma de requisição, como get e post
    res.send({nome: 'Notebook', preço: 123.45}) //Converter para JSON pelo send()
})

app.listen(porta, () => { //serve como a ignição do servidor
    console.log(`Servidor está executando na porta ${porta}`)
})