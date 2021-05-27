function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` //se nao e numero, nao faz nada, se sim, aplica mascara colocando real + duas casas
        resultado.push(partes[indice], valor)
    })
    return resultado.join('') //une a array em uma string
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)
