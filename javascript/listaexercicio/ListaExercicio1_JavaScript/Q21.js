function planoDeSaude (idade) {
    if (idade > 0) {
        if (idade < 10) return 100 + 80
        if (idade >= 10 && idade <= 30) return 100 + 50
        if (idade > 30 && idade <= 60) return 100 + 95
        if (idade > 60) return 100 + 130
    }
    else return 'Idade Invalida'
}

console.log(planoDeSaude(8))
console.log(planoDeSaude(18))
console.log(planoDeSaude(33))
console.log(planoDeSaude(65))
console.log(planoDeSaude(-1))