//foreach de forma correta, pega o valor e nao o indice, diferente do for in
for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { //for in
    console.log(i) //imprime os indices
}
for (let i of assuntosEcma) { //for of
    console.log(i) //imprime os valores
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto) //imprime a array de cada
}
for (let assunto of assuntosMap.keys()) {
    console.log(assunto) //imprime as chaves ('Map')
}
for (let assunto of assuntosMap.values()) {
    console.log(assunto) //imprime o valor (obj)
}
for (let [ch, vl] of assuntosMap.entries()) { //destructuring, entries retorna uma array par de chave e valor, funciona sem o entries
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])

for (let letra of s) {
    console.log(letra)
}