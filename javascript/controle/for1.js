let contador = 1
while (contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}
console.log('Fim da repeticao 1')


for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}
console.log('Fim da repeticao 2')


const notas = [5.1, 6.7, 10, 9.8, 7.3] //for para percorrer o array
for (let i = 0; i < notas.length; i++) {
    console.log(`i = ${notas[i]}`) //o i eh o indice que inicia em 0
} //coloca-se let para nao ter acesso a variavel depois

console.log('Fim da repeticao 3 ')
