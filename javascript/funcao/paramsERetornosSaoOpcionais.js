function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`A area esta acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44)) //so considera os dois primeiros e ignora o resto
console.log(area(5, 5)) //entrará no bloco if, imprimirá no console, não entrará no bloco else e encerrará a função.
// Como não foi executado nenhum retorno explícito, o valor padrão (undefined) é retornado.
area(5, 5) //A função seria chamada fora do console.log, logo seu retorno não seria impresso, mas seu bloco if executaria o console.log interno à função.

//Caso dentro da funcao, em vez do console.log() colocassemos o return, nao imprimiria o undefined e retornaria tudo certo