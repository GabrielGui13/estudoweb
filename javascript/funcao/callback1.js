const fabricantes = ['Mercedes', 'Audi', 'Bmw']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) //assinatura de funcao que pode ser passada para uma funcao forEach()
}
//callback, passar uma funcao, pra outra funcao, e quando determinado evento acontecer, a funcao passada vai disparar, vai ser chamada de volta

fabricantes.forEach(imprimir) /*funcao do array, que pra cada elemento do array, ele chame a funcao imprimir, 
o forEach() passa como parametro o nome do elemento que ta percorrendo e o indice*/

fabricantes.forEach( function(fabricante) {
    console.log(fabricante) //imprimira para cada um dos elementos do array o resultado da funcao, nao esta vinculada a funcao imprimir
})

fabricantes.forEach(fabricante => console.log(fabricante)) //outra sintaxe

// pra cada elemento da array, ele chama o callback passando o proprio elemento e o indice, encontrou outro elemento e faz tudo de novo

