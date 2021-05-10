console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') //estrutura dinâmica e indexada
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] //forma literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined, pois não tem 4 elementos, em outras linguagens daria erro

aprovados[3] = 'Paulo' //Mais comum para substituir, 4 elementos
console.log(aprovados[3]) 
aprovados.push('Abia') //ficou 5 elementos, ABia = aprovados[4]
console.log(aprovados.length) //imprime 5

aprovados[9] = 'Rafael' 
console.log(aprovados.length) //imprime 10, mas os indices 5, 6, 7, 8, estão empty (undefined), mas contam no length
console.log(aprovados[8] === undefined) //true      
console.log(aprovados[8] === null) //false

console.log(aprovados)
aprovados.sort() //ordena o array por ordem alfabetica
console.log(aprovados) //ainda impresso os empty items

delete aprovados[1] //é excluído mas não reordena o array, apenas coloca undefined na posição
console.log(aprovados[1]) //undefined
console.log(aprovados[2]) //continua sendo Bia no indice 2

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //removeu o carlos do indice 1 = parametros(elemento, quantidade de remoções)
console.log(aprovados) //reorganiza a array sem os empty items
aprovados.splice(1, 1, 'Elemento 1', 'Elemento 2') //remove Ana, e adiciona 2 elementos a partir do indice dela, caso o segund o parametro fosse 0 não removeria
console.log(aprovados) //reorganiza a array sem os empty items

