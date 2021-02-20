const raio = 5.6 // declarando o valor do raio como const pois nao vai se alterar
const area = Math.PI * Math.pow(raio, 2) // assim como no C#, o primeiro valor e a variavel e o segundo a potencia 

console.log(area.toFixed(2))

const arredondar = 6.75666
console.log(Math.ceil(arredondar)) //arredonda pra cima
console.log(Math.floor(arredondar)) //arredonda pra baixo
