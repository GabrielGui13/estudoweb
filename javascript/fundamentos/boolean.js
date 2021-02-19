let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //aplica duas negacoes para checar se o valor do let eh true ou false, servira para descobrir se um valor eh true or false
console.log(!true) //retorna false

//Os verdadeiros
console.log('Os verdadeiros...')
console.log(!!3) // 3 = true
console.log(!!-1) // -1 = true
console.log(!!' ')// ' ' = true
console.log(!!'texto') // 'texto' = true
console.log(!![]) // [] = true
console.log(!!{}) // {} = true
console.log(!!Infinity) // Infinity = true
console.log(!!(isAtivo = true)) //considera o valor apos a igualdade, e nao se a operacao deu certo

//Os falsos
console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) //se o resultado da atribuicao for falso, volta falso

console.log('pra finalizar...')
console.log(!!(0 || null || '' || 'opa')) //eh true pois tem ao menos um unico valor verdadeiro (true)
console.log((0 || null || '' || 'opa' || 123)) //sem as negacoes, retorna o primeiro valor verdadeiro (opa)

let nome = ''
console.log(nome || 'Desconhecido') //se houver algo no let (true), ele retorna a string, se nao, ele imprime o desconhecido