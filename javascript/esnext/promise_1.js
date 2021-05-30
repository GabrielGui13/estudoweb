/* O construtor da Promise recebe duas funções callback, a resolve, para quando a Promise for resolvida, e a reject, 
para rejeitar o valor dessa Promise. Você pode entender o resolve como se a função da Promise deu certo, 
e o reject caso a função tenha dado errado (um valor diferente do que se queria, ou um erro).

As promises são, como o nome bem diz, promessas, algo que vai ser resolvido no futuro e eventualmente passado de volta para ela e, 
quando isso acontecer, ela vai entrar ou no resolve, ou no reject.

O then também vai receber uma função, e o valor passado para essa função do then é o valor que foi cumprido pela função da promise. 
Você pode entender o then traduzindo para "então" ou "depois" no sentido de recebeu valor x 
e então fez execução tal ou recebeu valor x e depois fez execução tal. */

let a = 1
console.log(a)

let p = new Promise(function(resolve) { //seria melhor uma arrow function
    resolve(['Ana', 'Pedro', 'Bia', 'Carlos']) //valor, objeto ou array
}) //valor de algo no futuro, recebe funcao de parametro

function primeiroElemento(arrayOuString) { //
    console.log(arrayOuString)
    return arrayOuString[0] //como as duas funções eram iguais, transformou em uma só
}

//pode se usar funções para facilitar a leitura do código

//a função do then vai receber o 3 como parametro, pois é o valor definido dentro da promise como chamada
p
    /* .then(function(valor) { //dentro do then você define o funcionamento da função da Promise (cumprirPromessa)
        console.log(valor)
        return valor[0] //retorna a array, pois uma promise só retorna um valor
    }) */
    .then(primeiroElemento)
    .then(primeiroElemento) //recebe de parametro o valor retornado da outra função (Ana)
    .then(letra => {console.log(letra); return letra.toLowerCase()}) //Imprime a primeira letra da string Ana
    // .then(v => console.log(v))
    .then(console.log) //recebe a letra minuscula de parametro, poderia receber só o console.log que ele recebe o parametro