const _ = require('lodash') //esse import procura dentro de node_modules e procura o index.js

setInterval(() => console.log(_.random(400, 500)), 2000); //roda a cada 2 segundos

// npm i -g nodemon => usado para instalar o nodemon mas deu erro
//nodemon muda a execução do código em tempo real, caso esteja executando e o codigo seja salvo, ele restarta e executa
//rs restarta o código