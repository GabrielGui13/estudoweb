const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] //não pode atribuir mais nada a pilotos, mas podeusar o conteudo da array
pilotos.pop() //massa quebrou o carro, remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') //Adicionou um piloto na ultima posição
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //Insere um piloto na primeira posição
console.log(pilotos) 

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //insere dois pilotos após o indice 1, ou seja substitui o indice2 para frente (Alonso) = [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]
console.log(pilotos)

//remover
pilotos.splice(3, 1) //removeu o elemento do indice 3, massa quebrou de novo
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) //cria uma nova array contando do indice 2 para a frente
console.log(algunsPilotos1) //[ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4) //pega o indice 1, não o 0, mas não pega o indice 4, verstappen não vem
console.log(algunsPilotos2) //[ 'Alonso', 'Bottas', 'Raikkonen' ]