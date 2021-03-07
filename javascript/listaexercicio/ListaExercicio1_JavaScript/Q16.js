function calculadora (num1, op, num2) {
    switch (op) {
        case '+':
            console.log(num1 + num2)
            break
        case '-':
            console.log(num1 - num2)
            break
        case '*':
            console.log(num1 * num2)
            break
        case '/':
            console.log(num1 / num2)
            break
        default:
            console.log('Operacao Invalida')
    }
}

calculadora(2, '+', 3)
calculadora(2, '-', 3)
calculadora(3, '*', 3)
calculadora(3, '+', 3)
calculadora(2, 'sim', 3)