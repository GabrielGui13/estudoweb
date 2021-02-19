const nome = 'Rebeca'
const concat = 'Ola ' + nome + '!' //nao pode quebrar a linha em duas, o templatestring considera quebras, espacos em branco

const template = `
    Ola
    ${nome}!
    Tudo bem?
` //utiliza-se o simbolo da crase, tudo dentro dele e considerado, seja tab, quebra, expressoes, o ${} e utilizado para chamar a variavel dentro de uma string

console.log(concat, template)

console.log(`1 + 1 = ${1 + 1}`) // 1 + 1 = 2

const up = texto => texto.toUpperCase() //funcao em arrow para transformar todo o texto da const up em maiusculo
console.log(`Ei... ${up('cuidado')}!`) // criou a template string e chamou a const com o texto entre parenteses