//console.log(global) => ter cuidado ao usar, pois sempre que mexe em algo global, da mais chance de ter problema

global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})