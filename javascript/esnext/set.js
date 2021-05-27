// não aceita repetição e não é indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians').add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) //false, pois falta maiusculo
console.log(times.has('Vasco')) //true
times.delete('Flamengo')
console.log(times.has('Flamengo')) //false, pois foi removido

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] //Lucas repetido
const nomesSet = new Set(nomes)
console.log(nomesSet)
