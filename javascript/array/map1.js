const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) { // igual o foreach parametros = (value, index, array)
    return e * 2; //copia a array e a modifica, no caso duplica os valores
})

console.log(resultado, nums) //não modifica o original

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` //funçõesde parametro do map

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //como todos são arrays da pra chamar de novo
console.log(resultado)
