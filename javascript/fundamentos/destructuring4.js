function rand([min = 0, max = 1000]) {
    if (min > max) [min , max] = [max, min]
    const valor = Math.random() * (min - max) + max
    return Math.floor(valor)
}

console.log(rand([50, 40])) // passa os dois valores e nao precisa declarar igual o objeto
console.log(rand([993])) //passou apenas o minimo
console.log(rand([, 10])) //passou apenas o maximo
console.log(rand([])) //usara os valores padrao
//console.log(rand()) => daria erro pois tentaria desestruturar algo null ou undefined