const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) break //enquanto x for diferente de 5, ele executa, ao encontrar o break ele sai do laco (desvio de fluxo pra fora do laco corrente)
    console.log(`${x} = ${nums[x]}`)
}
console.log(' ')

for (y in nums) {
    if (y == 5) continue //nao imprimiu no console quando y = 5, e apos isso continuou a repeticao (interrompe a repeticao corrente e depois continua ela)
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) { //atribuiu um nome pro rotulo do for
    for (b in nums) {
        if (a == 2 && b == 3) break externo //se colocar so break, ele quebra apenas o bloco do for interno
        console.log(`Par = ${a},${b}`) //pra cada indice de fora, ele faz todas as repeticoes do bloco de dentro
        //enquanto for 0, ele faz de 0 ate 9, enquanto for 1, faz de 0 ate 9 de novo
    }
}
// nao usar o esse tipo de estrutura, pois eh baguncado
console.log('Fim da repeticao do externo')