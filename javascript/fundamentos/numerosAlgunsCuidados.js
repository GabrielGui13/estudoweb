console.log(7 / 0) //Infinity
console.log(7 / 0.0001) //70.000

console.log('10' / 2) //5, string dividido por 2, divide normalmente
console.log('10,2' / 2) //NaN, Not a Number, deveria ser 10.2, pois ele checa se pode ser um numero

console.log('Show' * 2)// NaN

console.log(0.1 + 0.7) //0.7999999, gera imprecisao, para nao demorar tanto para ser 100% precisa

// console.log(10.toFixed()), Nao funciona com o numero literal, da erro
console.log((10.349).toFixed(2)) //Arredonda para duas casas decimais e funciona entre parenteses