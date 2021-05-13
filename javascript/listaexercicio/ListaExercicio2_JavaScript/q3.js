const calcularSalario = function(hora, valorHora) {
    return `Salário igual a R$ ${Math.round(hora * valorHora)}`
}

console.log(calcularSalario(150, 40.5))