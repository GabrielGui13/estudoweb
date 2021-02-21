function teste1(num) {
    if (num > 7)
        console.log(num) //executara apenas esse codigo, assim como o c#
        console.log('Final') //esta fora do if pois nao tem chaves, nao esta associado ao if
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { //cuidado com o ;, nao usar com estruturas de controle
        console.log(num)
    }
} //o ; apos o if termina ele, o console.log() esta apenas no bloco sem filtro, e sempre executa, nao usar ;

teste2(6) 
teste2(8) //imprime os dois