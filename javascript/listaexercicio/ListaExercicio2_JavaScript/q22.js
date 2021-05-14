const funcaoDaSorte = function(num) {
    let random = Math.floor(Math.random() * 10) + 1
    if (num == random) {
        return  "Parabéns! O número sorteado foi o " + random
    }
    else return "Que pena! O número sorteado foi o " + random
}

console.log(funcaoDaSorte(3))