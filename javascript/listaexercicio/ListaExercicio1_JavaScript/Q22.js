function anuidade (mes, valor) {
    while (mes <= 12) {
        valor =  valor + (valor * 0.05)
        mes++
    }
    return valor.toFixed(2)
}

console.log(anuidade(6, 1000))
