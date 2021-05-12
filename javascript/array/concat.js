const filhas = ['Ana', 'Mariana']
const filhos = ['Marcos', 'Gabriel']
const todos = filhos.concat(filhas, 'Fulano') //Ainda adiciona mais um parametro variável

console.log(todos, filhos, filhas )

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))