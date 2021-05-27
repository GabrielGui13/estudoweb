// Arrow Function
const soma = (a, b) => a + b //parametros => return implicito  forma reduzida   funcao anonima
//um unico parametro nao necessita de parenteses, se a funcao tiver corpo {} deve ter return
console.log(soma(2, 3))


// Arrow Function (this)
//this na funcao arrow esta associado ao local que a funcao foi escrita
const lexico1 = () => console.log(this === exports) //aponta pro module.exports
const lexico2 = lexico1.bind({}) //continua apontando
const lexico3 = function() {console.log(this === exports, this === global)} //aponta para global
lexico1()
lexico2()
lexico3()


//parametro default
function log (texto = 'Node') {
    console.log(texto)
}

log() //usa o 'Node' de padrao quando recebe undefined
log(undefined) //continua
log(null) //null eh mais forte
log('Sou mais forte') //qualquer outro parametro sobrescreve


// operador rest
//tem dois nomes, spread e rest, agrupar e espalhar, em funcao o seu nome eh rest
function total(...numeros) { //recebe qtd indefinida de parametros e insere em uma array
    let total = 0
    numeros.forEach(n => total += n) //soma cada numero
    return total
}
console.log(total(1, 2, 3, 4, 5)) 