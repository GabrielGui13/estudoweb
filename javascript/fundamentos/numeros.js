const peso1 = 1.0
const peso2 = Number('2.0') //Especificou que e numero mas nao o conjunto, OBS: Atencao para as letras maiusculas

console.log(peso1, peso2) //imprime os dois valores
console.log(Number.isInteger(peso1)) //Checa se a constante peso1 eh inteira (true)
console.log(Number.isInteger(peso2)) //Checa se a constante peso2 eh inteira (true)

const avaliacao1 = 9.871 //Notas genericas da sprovas
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2 //Calculando media ponderada
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //O metodo toFixed serve para indicar a quantidade de casas decimais da constante
console.log(media.toString()) //Transforma a constante em texto, o toFixed nao funciona pois eh const
console.log(media.toString(2)) //Transforma a constante em um numero binario 
console.log(typeof media)
console.log(typeof Number) //Number eh uma funcao 