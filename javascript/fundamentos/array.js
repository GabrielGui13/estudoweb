const valores = [7.7, 8.4, 6.7, 9.3] //entre colchetes, eh separado pelas virgulas e acessado de modo indexado
console.log(valores[0], valores[3]) //retorna 7.7 e 9.3
console.log(valores[4]) //undefined

valores[4] = 10
console.log(valores[4])
console.log(valores.length) //retorna a quantidade de indices (5)

valores[7] = 22
console.log(valores) //mostra toda a array com empty items no meio

valores.push({id: 3}, false, null, 'teste') //objeto, bool, nulo e string sao adicionados pelo .push(), mas apos o ultimo indice no-empty
console.log(valores) //eh melhor criar arrays homogeneos e nao misturar dados

console.log(valores.pop()) //imprime e retira o ultimo valor do array ('teste')
delete valores[0] //retira o valor do indice [0] do array
console.log(valores)
console.log(typeof valores) //mostra que o array eh um object 
