function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //ou
    const comprarTv50 = trabalho1 && trabalho2 //e
    //const comprarTv32 = trabalho1 !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //pode simular um xor (exclusive or)
    const manterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv32, comprarTv50, manterSaudavel} //cria um objeto (de forma inteligente, pois seria redundante) para retornar todas as variaveis
}

console.log(compras(true, true)) //os dois trabalhos deram certo
console.log(compras(true, false)) //apenas um trabalho deu certo (iguais)
console.log(compras(false, true)) //apenas um trabalho deu certo (iguais)
console.log(compras(false, false)) //os dois trabalhos deram errado