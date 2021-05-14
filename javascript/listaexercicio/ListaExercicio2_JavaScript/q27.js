function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto).map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos) //cria obj a partir das arrays do entries
}
    
console.log(inverter({ a: 1, b: 2, c: 3}))