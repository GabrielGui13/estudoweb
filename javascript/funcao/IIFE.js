// Immediately Invoked Function Expression

(function sim() {
    console.log('Pode crer')
    console.log('Teste 2')
})() //Chama a funcao
//Delimitada por parenteses

console.log('Sera executado na hora!') //toca o escopo global
console.log('Foge do escopo mais abrangente'); //Qualquer declaração antes de uma IIFE deve ter um ponto e virgula para indicar que a linha terminou

(function nao() {
    console.log('Pode crer')
    console.log('Teste 2')
})()    