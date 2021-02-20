//par nome/valor

const saudacao = 'Ola' //contexto lexico 1 (local que a variavel foi definida no codigo)

function exec () {
    const saudacao = 'Falaaa' //contexto lexico 2
    return saudacao
}

//const saudacao = 'Eaii' => Geraria erro pois "Identifier 'saudacao" has already been declared
//caso fosse var substituiria

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

