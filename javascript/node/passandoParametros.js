module.exports = function (...nomes) { //transforma lista de nomes
    return nomes.map(nome => `Boa semana ${nome}!`) //em lista de saudações
} //module.exports envia uma função com parametros

