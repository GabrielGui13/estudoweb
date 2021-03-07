function aumentoSalario (salario, plano) {
    switch (plano.toUpperCase()) {
        case 'A':
            console.log(salario + salario * 0.1)
            break 
        case 'B':
            console.log(salario + salario * 0.15)
            break 
        case 'C':
            console.log(salario + salario * 0.2)
            break 
        default:
            console.log('Plano invalido')
            break 
    }
}

aumentoSalario(500, 'a')
aumentoSalario(500, 'b')
aumentoSalario(500, 'c')
aumentoSalario(500, 'd')