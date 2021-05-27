//operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de funcao para criar uma array

//usar spread com objeto

const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario} //espalhando no objeto todos os atributos de funcionario
//mudar aqui nao altera o outro pois sao diferentes enderecos de memoria
console.log(clone)


//usar spread com array

const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] //insere no meio da array os elementos da outra array
console,log(grupoFinal) 