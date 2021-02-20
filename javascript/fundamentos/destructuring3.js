function rand({min = 0, max = 1000}) { //em vez de acessar objeto.min ou objeto.max ja faz o destructuring e pega pronto
    const valor = Math.random() * (max - min) + min //gera um numero aleatorio entre o min e o max 
    return Math.floor(valor)
}

const obj = {max: 50, min: 40} 
console.log(rand(obj))
console.log(rand({min: 955})) //gera valor random entre 955 e 1000 (valor padrao)
console.log(rand({})) //gera numero entre 0 e 1000 (valores padrao)

//console.log(rand()) => da erro pois tenta destruturar algo null ou undefined