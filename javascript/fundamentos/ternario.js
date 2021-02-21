const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // ? operador ternario

/* nome da funcao, depois o parametro, e depois a linha de codigo, sem o return,
se a operacao for true, retorna aprovado, se for falso, retorna reprovado */

console.log(resultado(7.1)) //maior que 7, true, aprovado
console.log(resultado(6.7)) //menor que 7, false, reprovado

var boolTrue = resultado(9.5) //armazena a string aprovado no var
var boolFalse = resultado(3.7) //armazena a string reprovado no var

console.log(boolTrue, boolFalse) // Aprovado Reprovado (true, false)

