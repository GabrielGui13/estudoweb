// tagged templates - processa o template string dentro de uma funcaop

function tag (partes, ...valores) {
    console.log(partes) //o que faz parte do que nao foi interpolado
    console.log(valores) //interpolado dentro da string
    return 'Outra string' //nao usou a tring original e gerou outra
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(`${aluno} esta ${situacao}!!`) //Gui esta Aprovado!!
console.log(tag `${aluno} esta ${situacao}!!`) //[ '', ' esta ', '!!' ] partes, [ 'Gui', 'Aprovado' ] valores
