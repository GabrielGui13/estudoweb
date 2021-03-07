function diaDaSemana (dia) {
    switch (dia) {
        case 2: case 3: case 4: case 5: case 6:
            console.log("Dia util") 
            break
        case 1: case 7:
            console.log("Fim de semana")
            break
        default:
            console.log("Dia invalido")
            break
    }
}

diaDaSemana(2)
diaDaSemana(7)
diaDaSemana(8)
diaDaSemana(1)