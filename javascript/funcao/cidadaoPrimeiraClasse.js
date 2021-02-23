// Funcao em js eh First-Class Object (citizen)
// Higher-order function

// criar de forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function() { }

// Armazenar em uma array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3)) //executa a primeira funcao da array

// Armazenar a funcao dentro de atributos de objetos
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar funcao como parametro 
function run(fun) {
    fun() //esta esperando que o parametro seja uma funcao e invocando ele
}

run(function() {console.log('Executando...')}) // Atribuiu uma funcao ao parametro da function run, quem na realidade imprimiu o resultado foi a fun()

// Uma funcao pode retornar/conter uma funcao
function soma (a, b) {
    return function (c) { //em vez de retornar o valor, esta retornando com outra funcao
        console.log(a + b + c)
    }
}

soma(2, 3)(4) //a forma de chamar as funcoes pela ordem atribuindo valores para cada parametro

const cincoMais = soma(2, 3)
cincoMais(4) //outra forma de chamar as funcoes acima