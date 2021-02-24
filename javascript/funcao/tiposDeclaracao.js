console.log(soma(3, 4)) //pode chamar a funcao antes dela ser declarada
// console.log(sub(3, 4)) => daria erro pois diria que a function is not defined

// function declaration
function soma (x, y) {
    return x + y
}


// function expression
const sub = function(x, y) {
    return x - y
}


// named function expression
const mult = function mult(x, y) { //forma pouco usada, vai apenas nomear no stack
    return x * y
}

console.log(mult(3, 4)) // se for chamada antes da declaracao da funcao da erro (mult is not defined)

    
