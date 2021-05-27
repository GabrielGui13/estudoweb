const tecnologias = new Map() //parecido com objeto, mas é mais flexivel na chave
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) //undefined
console.log(tecnologias.get('react')) //forma correta de acessar
console.log(tecnologias.get('react').framework) //acessando dentro do objeto

const chavesVariadas = new Map([ //abre uma array
    [function(){}, 'Função'], //chave e valor
    [{}, 'Objeto'], //chave é um objeto
    [123, 'Número'] //chave é um numero
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl) //imprime o valor e depois a chave
})

console.log(chavesVariadas.has(123)) //checa se tem certo elemento  =>  true
chavesVariadas.delete(123) //deleta o item, e retorna true or false
console.log(chavesVariadas.has(123)) //checa se tem certo elemento  =>  false
console.log(chavesVariadas.size) //2, pois o elemento 123 foi deletado

chavesVariadas.set(123, 'a') //nao podem ter chaves duplicadas
chavesVariadas.set(123, 'b') //retorna b pois ele sobreescreve
chavesVariadas.set(456, 'b') //aceita valor repetido, mas não chave
console.log(chavesVariadas)
